import csv
import os
import sys
from lxml import etree

parser = etree.XMLParser(attribute_defaults=False, load_dtd=True,   resolve_entities=True,remove_comments=False, ns_clean=True, recover=True)
file = "./Landscape.html"
data = etree.parse(file, parser=parser)

header = etree.XPath('''//h2[contains(@class, 'text-lg font-bold')]''')
section = etree.XPath('''//li[contains(@class, 'relative')]''')
#category = etree.XPath('''//h3[contains(@class, 'border-fmgold dark:border-yellow-400 text-fmgold dark:text-yellow-400 sticky top-[54px] z-10 bg-white pb-3 text-2xl dark:bg-slate-900')]''')
#categories = [x.text for x in category(data)]
#print(categories)

cards = []
for section_element in section(data):
    # [etree.dump(x) for x in section_element.findall('''./h3[1]''')]
    category = section_element.findall('''./h3[1]''')[0].text if section_element.findall('''./h3[1]''') else None
    if not category:
        continue
    card_elements = section_element.findall('''./ul//li''')
    if card_elements:
        for element in card_elements:
            company = element.findall('./div[1]/div[1]/div[1]/h2')[0].text if element.findall('./div[1]/div[1]/div[1]/h2') else None
            country = element.findall('./div[1]/div[1]/div[1]/span')[0].text if element.findall('./div[1]/div[1]/div[1]/span') else None
            if company:
                cards.append([category, company, country])

writer = csv.writer(sys.stdout, lineterminator=os.linesep)
writer.writerow(['Category','Company','Country'])
writer.writerows(cards)
