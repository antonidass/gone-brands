INSERT INTO company(id, country_code, country_name, image_url, name, sector, site_url, description) VALUES
     (nextval('company_serial'), 'usa', 'США', 'apple', 'Apple', 'Технологии', 'https://www.apple.com/ru/',
      'Apple — американская корпорация, производитель персональных и планшетных компьютеров, аудиоплееров, смартфонов, программного обеспечения и цифрового контента.'),
     (nextval('company_serial'), 'swe', 'Швеция', 'abb', 'Abb', 'Технологии', 'https://new.abb.com/ru','ABB — шведско-швейцарская транснациональная корпорация, специализирующаяся в области электротехники и энергетического машиностроения.'),
     (nextval('company_serial'), 'usa', 'США', 'hp', 'HP', 'Технологии', 'https://hp-rus.com/','Hewlett-Packard — созданная в 1939 году компания-поставщик аппаратного и программного обеспечения для организаций и индивидуальных потребителей.'),
     (nextval('company_serial'), 'usa', 'США', 'ibm', 'IBM', 'Технологии', 'https://www.ibm.com/about/russia/','IBM — американская компания со штаб-квартирой в (штат Нью-Йорк), один из крупнейших в мире производителей и поставщиков аппаратного и программного обеспечения'),
     (nextval('company_serial'), 'fin', 'Финляндия', 'nokia', 'Nokia', 'Технологии', 'https://www.nokia.com/phones/ru_ru','Nokia Corporation (фин. Nokia Oyj, произносится но́киа) — финская транснациональная компания, производитель телекоммуникационного оборудования для мобильных, фиксированных, широкополосных и IP-сетей. В 2000-е годы доминировала на мировом рынке мобильных телефонов (с 2013 года телефоны под маркой Nokia выпускаются другими производителями).'),
     (nextval('company_serial'), 'usa', 'США', 'mcdonalds', 'McDonald''s', 'Общепит', 'https://www.mcdonalds.com/us/en-us.html','McDonald’s — американская корпорация, работающая в сфере общественного питания, крупнейшая в мире сеть ресторанов быстрого питания, работающая по системе франчайзинга.'),
     (nextval('company_serial'), 'swe', 'Швеция', 'ikea', 'IKEA', 'Потребление', 'https://www.ikea.com/ru/ru/','IKEA (ИКЕА) — основанная в Швеции нидерландская производственно-рознично торговая группа, одна из крупнейших в мире торговых сетей по продаже мебели и товаров для дома. Юридическое название — Ingka.'),
     (nextval('company_serial'), 'usa', 'США', 'coca-cola', 'Coca-Cola', 'Потребление', 'https://www.coca-cola.ru/','The Coca-Cola Company is an American multinational beverage corporation, best known as the producer of Coca-Cola. The sugary drink was invented in 1886 by pharmacist John Stith Pemberton.'),
     (nextval('company_serial'), 'de', 'Германия', 'dhl', 'DHL', 'Логистика', 'https://www.dhl.com/global-en/home.html','DHL — международная компания экспресс-доставки грузов и документов, лидер мирового и российского логистических рынков.'),
     (nextval('company_serial'), 'usa', 'США', 'nike', 'Nike', 'Одежда', 'https://www.nike.com/ru/','Nike, Inc. — американская транснациональная компания, специализирующаяся на спортивной одежде и обуви. Штаб-квартира — в городе Бивертон (штат Орегон).'),
     (nextval('company_serial'), 'usa', 'США', 'spotify', 'Spotify', 'Сервисы', 'https://open.spotify.com/','Spotify — стриминговый сервис, позволяющий легально прослушивать музыкальные композиции, аудиокниги и подкасты, не скачивая их на устройство.'),
     (nextval('company_serial'), 'usa', 'США', 'airbnb', 'Airbnb', 'Сервисы', 'https://airbnb.ru/','Airbnb (рус. «Эйрбиэнби») — онлайн-площадка для размещения и поиска краткосрочной аренды частного жилья по всему миру. Пользователи Airbnb имеют возможность сдавать путешественникам в аренду своё жильё целиком или частично.'),
     (nextval('company_serial'), 'usa', 'США', 'starbucks', 'Starbucks', 'Общепит', 'https://www.starbucks.com/','Starbucks Corporation, «Ста́рбакс» — американская компания по продаже кофе и одноимённая сеть кофеен.'),
    (nextval('company_serial'), 'jp', 'Япония', 'uniqlo', 'Uniqlo', 'Одежда', 'https://www.uniqlo.com/ru/estore/','Uniqlo — японская розничная сеть повседневной одежды. Компания является дочерней компанией Fast Retailing.');



INSERT INTO list(id, date_back, date_left, news_url, company_id, status, comment)
values
    (nextval('list_serial'), null, '20220302', 'https://www.kommersant.ru/doc/5238848', 1, 'Покинула',
     'Apple прекращает работу в России, пишет Reuters со ссылкой на заявление компании. «Мы глубоко обеспокоены вторжением России в Украину и поддерживаем всех людей, которые страдают в результате насилия»,— говорится в заявлении Apple.'),
    (nextval('list_serial'), null, '20220721', 'https://lenta.ru/news/2022/07/21/abb/#:~:text=%D0%A8%D0%B2%D0%B5%D0%B4%D1%81%D0%BA%D0%BE%2D%D1%88%D0%B2%D0%B5%D0%B9%D1%86%D0%B0%D1%80%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F%20ABB%2C%20%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%20%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%2D,%D1%81%D1%80%D0%B0%D0%B7%D1%83%20%D0%BF%D0%BE%D1%81%D0%BB%D0%B5%20%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D0%B0%20%D0%B2%D0%BE%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9%20%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B8', 2, 'Покинула',
     'ABB has decided to exit the Russian market due to the ongoing war in Ukraine and impact of related international sanctions. The financial impact in the second quarter amounted to -$57 million of which -$23 million will impact cash flow in the third quarter.
 When the war broke out, ABB stopped taking new orders in Russia. At the same time, it has been fulfilling a small number of existing contractual obligations with local customers, in compliance with applicable sanctions.
 Most of ABB’s dedicated Russian workforce has been on leave since March of this year and the company will do its best to support them as it realigns its operations in a controlled manner.'),
    (nextval('list_serial'), null, '20220601', 'https://quote.rbc.ru/news/short_article/6298a36a9a7947aae1a209be#:~:text=%D0%9F%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%20%D0%BD%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA%D0%BE%D0%B2%20HP%20%D0%BE%D0%B1%D1%8A%D1%8F%D0%B2%D0%B8%D0%BB%20%D0%BE%D0%B1,%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D1%88%D0%B5%D0%B3%D0%BE%D1%81%D1%8F%20%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0%20%D0%B8%D0%B7%20%D1%8D%D1%82%D0%B8%D1%85%20%D1%81%D1%82%D1%80%D0%B0%D0%BD', 3, 'Покинула',
     'Для нас больше не представляется целесообразным продолжать деятельность в России и Белоруссии, мы приступаем к упорядоченному выводу оставшегося бизнеса из этих стран. Мы ожидаем дополнительных списаний в третьем квартале 2022 года в связи с нашим решением, но эти потери не будут существенными.'),
    (nextval('list_serial'), null, '20220305', 'https://www.cnews.ru/news/top/2022-03-06_rossiya_ostalas_bez_ibmpod', 4, 'Покинула',
     'Помимо того, что мы не продаем технологии в России, мы не ведем дела с российскими военными организациями» (In addition to not selling technology in Russia, we do not do business with Russian military organizations).'),
    (nextval('list_serial'), null, '20220301', 'https://www.ixbt.com/news/2022/04/12/nokia-uhodit-s-rossijskogo-rynka.html', 5, 'Покинула',
     'Дальнейшее присутствие Nokia в России невозможно. За последние недели мы приостановили поставки, прекратили новый бизнес и переносим нашу ограниченную научно-исследовательскую деятельность за пределы России. Теперь мы можем объявить о выходе с российского рынка. В ходе этого процесса нашим приоритетом остаётся безопасность и благополучие наших сотрудников.'),
    (nextval('list_serial'), null, '20220516', 'https://www.ixbt.com/news/2022/03/09/mcdonald-s-62.html#:~:text=McDonald''s%20%D0%B7%D0%B0%D0%BA%D1%80%D1%8B%D0%B2%D0%B0%D0%B5%D1%82%20%D0%B2%D1%81%D0%B5%20%D1%80%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD%D1%8B%20%D0%B2,%D0%BF%D1%80%D0%B8%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%82%D1%8C%20%D0%B2%D1%81%D0%B5%20%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B8%20%D0%BD%D0%B0%20%D1%80%D1%8B%D0%BD%D0%BA%D0%B5', 6, 'Покинула',
     'McDonald''s принял решение временно закрыть все свои рестораны в России и приостановить все операции на рынке. В России у нас работает 62 000 человек, которые вложили свое сердце и душу в наш бренд McDonald''s, чтобы служить своим сообществам.'),
    (nextval('list_serial'), null, '20220303', 'https://www.kommersant.ru/doc/5514279', 7, 'Покинула',
     'За последние несколько месяцев ситуация с бизнес-процессами и цепочками поставок по всему миру сильно ухудшилась. Ввиду этого мы не видим возможности возобновить продажи в обозримом будущем. Как следствие, группа компаний Inter IKEA и группа компаний Ingka приняли решение сократить масштаб бизнеса в России. Это трудное решение, но мы верим в то, что оно необходимо», — сообщили представители компании.'),
    (nextval('list_serial'), null, '20220622', 'https://www.forbes.ru/biznes/469591-coca-cola-uhodit-iz-rossii-cto-proishodit-na-samom-dele', 8, 'Покинула',
     'Дистрибьютор Coca-Cola в России — Coca-Cola HBC — сообщил, что больше не будет производить и продавать напитки бренда в стране.'),
    (nextval('list_serial'), null, '20220729', 'https://www.retail.ru/news/dhl-ukhodit-iz-rossii-30-iyulya-2022-219038/', 9, 'Покинула',
     'DHL объяснила свое решение об уходе из России «существенными техническими сложностями в функционировании информационных систем и глобальной операционной структуры, а также законодательными ограничениями».'),
    (nextval('list_serial'), null, '20220523', 'https://www.rbc.ru/business/25/05/2022/628d58f99a79478331268087', 10, 'Покинула',
     'Американская компания Nike, специализирующаяся на выпуске спортивной обуви и одежды, не продлила соглашение со своим франчайзи Inventive Retail Group (IRG) из-за отсутствия возможности «в обозримом будущем» доставить продукцию в Россию'),
    (nextval('list_serial'), null, '20220325', 'https://www.kommersant.ru/doc/5280554#:~:text=Spotify%20%D1%83%D0%B9%D0%B4%D0%B5%D1%82%20%D0%B8%D0%B7%20%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8.%20%D0%A1%D1%82%D1%80%D0%B8%D0%BC%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2%D1%8B%D0%B9,%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8%20%D0%B8%20%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8E%20%D0%B2%20%D1%80%D0%B5%D0%B3%D0%B8%D0%BE%D0%BD%D0%B5', 11, 'Покинула',
     'Spotify по-прежнему считает, что крайне важно поддерживать работу нашего сервиса в России, чтобы предоставлять надежные, независимые новости и информацию в регионе. К сожалению, недавно принятый закон еще больше ограничивает доступ к информации, устраняет свободу слова и новостей, ставит под угрозу безопасность сотрудников Spotify и, возможно, даже наших слушателей. После тщательного рассмотрения наших вариантов и текущих обстоятельств мы пришли к сложному решению полностью приостановить наш сервис в России'),
    (nextval('list_serial'), null, '20220404', 'https://ria.ru/20220306/oteli-1776803374.html', 12, 'Покинула',
     'Airbnb приостанавливает всю деятельность в России и Белоруссии'),
    (nextval('list_serial'), null, '20220523', 'https://www.rbc.ru/business/23/05/2022/628b99109a7947e75d98e338', 13, 'Покинула',
     'As we mentioned on March 8, we have suspended all business activity in Russia, including shipment of all Starbucks products. Starbucks has made the decision to exit and no longer have a brand presence in the market. We will continue to support the nearly 2,000 green apron partners in Russia, including pay for six months and assistance for partners to transition to new opportunities outside of Starbucks.'),
    (nextval('list_serial'), null, '20220308', 'https://www.forbes.ru/forbeslife/458525-aponskaa-set-magazinov-odezdy-uniqlo-vremenno-priostanavlivaet-deatel-nost-v-rossii', 14, 'Покинула',
     'Группой компаний Fast Retailing было принято решение о временной приостановке работы. Все 50 магазинов UNIQLO в России, а также интернет‑магазин временно приостановили свою работу с 21 марта 2022 г.');



