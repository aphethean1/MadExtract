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

count = 0
cards = []
for section_element in section(data):
    # [etree.dump(x) for x in section_element.findall('''./h3[1]''')]
    category = section_element.find('''./h3[1]''').text if section_element.find('''./h3[1]''') is not None else None
    if category is None:
        continue
    card_elements = section_element.find('ul').findall('''./li''')
    #print(category,":",len(card_elements))
    if card_elements is not None:
        for element in card_elements:
            company = element.find('./div[1]/div[2]/h2').text if element.find('./div[1]/div[2]/h2') is not None else None
            country = element.find('./div[1]/div[2]/span').text if element.find('./div[1]/div[2]/span') is not None else None
            if company:
                cards.append([category, company, country])

writer = csv.writer(sys.stdout, lineterminator=os.linesep)
writer.writerow(['Category','Company','Country'])
writer.writerows(cards)
