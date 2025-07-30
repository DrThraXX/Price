# prices/utils.py

import re
import requests
from bs4 import BeautifulSoup

def fetch_specific_car_prices():
    """
    وب‌سکراپ قیمت و نام خودرو از آدرس‌های مشخص‌شده در khodro45.
    خروجی: [{'name': 'سمند سورن پلاس', 'price': 674000000}, ...]
    """
    urls = [
        'https://khodro45.com/pricing/samand-soren-plus/',
        'https://khodro45.com/pricing/samandsoren-xu7p/',
        'https://khodro45.com/pricing/shahin-plus-at/',
        'https://khodro45.com/pricing/shahin-gl-mt/',
        'https://khodro45.com/pricing/shahin-g-mt/',
        'https://khodro45.com/pricing/shahin-g-automatic/',
        'https://khodro45.com/pricing/peugeot-pars-basic/',
        'https://khodro45.com/pricing/peugeotpars-xu7p/',
        'https://khodro45.com/pricing/peugeot-207-mt/',
        'https://khodro45.com/pricing/207tip5/',
        'https://khodro45.com/pricing/peugeot-207-mt/',
        'https://khodro45.com/pricing/peugeot-207-automatic/',
        'https://khodro45.com/pricing/dena-plus-basicmt/',
        'https://khodro45.com/pricing/dena-plus-tat/',
        'https://khodro45.com/pricing/quick-plus-fullat/',
        'https://khodro45.com/pricing/quick-sr-mt/',
        'https://khodro45.com/pricing/quick-s-mt/',
        'https://khodro45.com/pricing/quickr-automatic/',
        'https://khodro45.com/pricing/quickgxr-mt/',
        'https://khodro45.com/pricing/soren-plus-cng/',
        
        
    ]

    results = []
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    }

    for url in urls:
        try:
            resp = requests.get(url, headers=headers, timeout=10)
            resp.raise_for_status()
            soup = BeautifulSoup(resp.text, 'html.parser')

            # 1) استخراج نام خودرو از اولین تگ h1
            h1 = soup.find('h1')
            name = h1.get_text(strip=True) if h1 else url.split('/')[-2].replace('-', ' ').title()

            # 2) استخراج قیمت با regex روی کل متن صفحه
            text = soup.get_text(separator=' ', strip=True)
            m = re.search(r'([\d,]+)\s*تومان', text)
            if m:
                price = int(m.group(1).replace(',', ''))
            else:
                price = None

            results.append({
                'name': name,
                'price': price
            })

        except Exception as e:
            # در صورت خطا، لاگ کن و یک آیتم با None اضافه کن
            print(f"Error fetching {url}: {e}")
            results.append({
                'name': url.split('/')[-2].replace('-', ' ').title(),
                'price': None
            })

    return results


if __name__ == '__main__':
    cars = fetch_specific_car_prices()
    import json
    print(json.dumps(cars, ensure_ascii=False, indent=2))
