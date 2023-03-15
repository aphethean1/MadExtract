import csv
import os
import sys
import lxml.html as lh
from decimal import Decimal
d = {
    'K': 3,
    'M': 6,
    'B': 9
}
def text_to_num(text):
    if text is None:
        return None
    if text[-1] in d:
        num, magnitude = text[:-1], text[-1]
        return Decimal(num) * 10 ** d[magnitude]
    else:
        return Decimal(text)

file = "./Landscape.html"
doc = lh.parse(file)

headers = doc.xpath('''//h2[contains(@class, 'text-lg font-bold')]''')
sections = doc.xpath('''//li[contains(@class, 'relative')]''')

count = 0
cards = []
for section_element in sections:
    category = section_element.find('''./h3[1]''').text if section_element.find('''./h3[1]''') is not None else None
    if category is None:
        continue
    card_elements = section_element.find('ul').findall('''./li''')
    if card_elements is not None:
        for element in card_elements:
            company = element.find('./div[1]/div[2]/h2').text_content() if element.find('./div[1]/div[2]/h2') is not None else None
            country = element.find('./div[1]/div[2]/span').text_content() if element.find('./div[1]/div[2]/span') is not None else None
            funding = element.find('./div[2]/span[2]').text_content() if element.find('./div[2]/span[2]') is not None else None
            funding = funding.replace('Total Funding: ', '') if funding is not None else None
            funding_num = text_to_num(funding.replace('$','')) if funding is not None else None
            desc = element.find('./p').text_content() if element.find('./p') is not None else None
            if company:
                cards.append([category, company, country, funding, funding_num, desc])

writer = csv.writer(sys.stdout, lineterminator=os.linesep)
writer.writerow(['Category','Company','Country','Total Funding','Funding Numeric','Description'])
writer.writerows(cards)
