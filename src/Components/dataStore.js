import React, { useState } from 'react'
import { createContext } from 'react'
// import Fitness from './Fitness';

// import Bollywood from './Bollywood';
export const Store =createContext();
function DataStore(props){
    const [data,setData]=useState([
        {
            id:1,
            heading:"Hrithik Roshan And Girlfriend Saba Azad Enjoy Vacay In Argentina, Ladylove Calls Him ‘Hippo Heart’",
            image:"https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2023/07/28/1250995-hrithik-roshan-saba-azad.jpg",
            description:"Bollywood superstar Hrithik Roshan is currently on a vacation to Argentina, with his girlfriend, actress-singer, Saba Azad. Saba took to her Instagram Stories, and shared some love-struck photos with her beau.         The photos were clicked in a restaurant in Buenos Aires. Saba shared a solo picture of Hrithik, wherein he is seen donning a sleeveless black T-shirt, and a matching cap.",
            cat:"Bollywood",
        },
        {
            id:2,
            heading:"Rocky Aur Rani Kii Prem Kahaani receives positive reviews and box office growth, Kangana responds to Subramanian Swamy’s remark on her security, Bawaal controversy gains international attention with diplomats involved",
            image:"https://www.hindustantimes.com/ht-img/img/2023/07/30/550x309/Rocky_aur_Rani_1690685057130_1690685057290.jpg",
            description:"Rocky aur Rani Kii Prem Kahaani also stars veteran actors Dharmendra, Jaya Bachchan and Shabana Azmi. It also stars Tota Roy Choudhury, Churni Ganguly, and Aamir Bashir.",
            cat:"Bollywood",
        },
        {
            id:3,
            heading:"Ajay Devgn Posts This As ‘Once Upon a Time in Mumbaai’ Clocks 13 Years",
            image:"https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2023/07/30/1252327-collage-maker-30-jul-2023-04-12-pm-6206.jpg",
            description:"Actors Ajay Devgn, Emraan Hashmi, and Kangana Ranaut starrer gangster drama film ‘Once Upon a Time in Mumbaai’ turned 13 on Sunday. To mark the occasion, actor Ajay Devgn took to his Instagram account and shared a picture which he captioned, “Once upon a time in Mumbai (metro) #13YearsOfOnceUponATimeInMumbai.” .",
            cat:"Bollywood",
        },
        {
            id:4,
            heading:" From Ranbir Kapoor to Kiara Advani, Bollywood's top stars turn showstoppers at India Couture Week",
            image:"https://images.mid-day.com/images/images/2023/jul/kiararanbiricw_d.jpg",
            description:"The India Couture Week 2023 was the 16th edition of the annual fashion event. It aimed to highlight and celebrate India’s rich craftsmanship for a contemporary audience organised by the Fashion Design Council of India (FDCI), the fashion event sees celebrated and upcoming Indian designers showcase their latest collections. Different celebrities are styled in these stunning collections. This year too, celebs like Aditi Rao Hydari, Ranbir Kapoor and Kiara Advani stole the show as they walked the ramp.",
            cat:"Bollywood",
        },
        {
            id:5,
            heading:"Deepika Padukone grooves to ‘What Jhumka’ after watching Rocky Aur Rani Kii Prem Kahaani, recites Ranveer Singh’s Rocky Randhawa dialogues",
            image:"https://stat5.bollywoodhungama.in/wp-content/uploads/2023/07/Deepika-Padukone-grooves-to-%E2%80%98What-Jhumka-after-watching-Rocky-Aur-Rani-Kii-Prem-Kahaani-recites-Ranveer-Singhs-Rocky-Randhawa-dialogues.jpg",
            description:"Ranveer Singh and Alia Bhatt’s Rocky Aur Rani Kii Prem Kahaani is creating the right kind of noise with audiences and critics praising the romantic family entertainer. The film marks Karan Johar’s 25th year as a filmmaker and he returns to direction after seven years since Ae Dil Hai Mushkil. With the positive reviews pouring in for the film from all corners and it collecting Rs. 27.15 crore in the first two days of its release, Deepika Padukone went to watch the film on Saturday evening with her husband Ranveer Singh and well, she really loved the movie.",
            cat:"Bollywood",
        },
        {
            id:6,
            heading:"Jawan: Shah Rukh Khan grooves to beats of foot-tapping dance number ‘Zinda Banda’",
            image:"https://media5.bollywoodhungama.in/wp-content/uploads/2023/07/Jawan-Shah-Rukh-Khan-grooves-to-beats-of-foot-tapping-dance-number-Zinda-Banda.jpg",
            description:"Ranveer Singh and Alia Bhatt’s Rocky Aur Rani The excitement surrounding the much-anticipated film Jawan starring Shah Rukh Khan reaches new heights as the film’s first song, 'Zinda Banda' launched today. After thrilling audiences with its action-packed sequences and adrenaline-pumping adventure, the film now sets the stage for an electrifying dance number with Anirudh Ravinchander's foot-tapping composition.",
            cat:"Bollywood",
        },
        // {
        //     id:7,
        //     heading:"Made In Heaven 2: Mrunal Thakur, Radhika Apte, Shibani Dandekar and others turn bride for Prime Video series",
        //     image:"https://stat4.bollywoodhungama.in/wp-content/uploads/2023/07/Made_In_Heaven_2_Brides.jpeg",
        //     description:"For a bride, her wedding day is one of the most special days of her life and looking her absolute best is a cherished moment. The Amazon Original Series Made In Heaven has been touted to capture the special occasion of her life. Ahead of the trailer launch of the most anticipated season 2, the brides of the series have taken centre stage, building anticipation and leaving fans eagerly waiting for more.",
        //     cat:"Bollywood",
        // },
        {
            id:7,
            heading:"Bigg Boss OTT 2: Pooja Bhatt to leave Salman Khan-show with Alia Bhatt",
            image:"https://media5.bollywoodhungama.in/wp-content/uploads/2023/07/Pooja_Alia_Bhatt.jpeg",
            description:"According to a tweet by the Bigg Boss OTT 2 fan page, Pooja Bhatt has a contract of only 6 weeks and she may exit the show this weekend due to her prior commitments. There is also speculation that her sister, Alia Bhatt, might come as a guest to promote her new movie, Rocky Aur Rani Kii Prem Kahaani, and might take Pooja out of the show during her visit.",
            cat:"Bollywood",
        },
        {
            id:8,
            heading:"Bhumi Pednekar joins Jio MAMI as the Brand Ambassador for Dimensions Mumbai",
            image:"https://media5.bollywoodhungama.in/wp-content/uploads/2023/07/Bhumi-Pednekar-joins-Jio-MAMI-as-the-Brand-Ambassador-for-Dimensions-Mumbai.jpg",
            description:"Dimensions Mumbai, a short film competition based on the theme of Mumbai City, is back and now open for submissions. The category was introduced in 2009 by Jaya Bachchan as an ode to Mumbai. Dimensions Mumbai competition is applicable for young filmmakers within the age group of 18–25 years across India; all they need to do is film Mumbai-based themes in Mumbai. Bhumi Pednekar is the Brand Ambassador for Dimensions Mumbai this year. A hard-core Mumbai girl herself, Bhumi Pednekar, in her role, will be engaging and supporting the young creative collective of aspiring filmmakers at Dimensions Mumbai.",
            cat:"Bollywood",
        },
        {
            id:9,
            heading:"Kangana Ranaut CONTINUES slamming Karan Johar, compares him with “Raavan”, accuses him of manipulating perception through “paid PR”; drags Rocky Aur Rani Kii Prem Kahaani",
            image:"https://media5.bollywoodhungama.in/wp-content/uploads/2023/07/Kangana_Ranaut_Karan_Johar_RRPKP.jpeg",
            description:"Ever since Ranveer Singh and Alia Bhatt's Rocky Aur Rani Kii Prem Kahaani released, Bollywood actress Kangana Ranaut has left no stone unturned to bash the film and its director Karan Johar. In fact, besides a bunch of Instagram Stories, yesterday, on July 30, Ranaut dedicated three posts to Johar, in which she accused him of manipulating the perception of his movies through “paid PR.",
            cat:"Bollywood",
        },
        {
            id:10,
            heading:"Daler Mehndi and Mika Singh to feature as actors in Akshay Kumar-Sanjay Dutt-Arshad Warsi starrer Welcome 3",
            image:"https://stat4.bollywoodhungama.in/wp-content/uploads/2023/07/Daler-Mehndi-and-Mika-Singh-to-feature-as-actors-in-Akshay-Kumar.jpg",
            description:"Welcome (2007) is one of the funniest films of Bollywood and has a tremendous recall value. Though the sequel, Welcome Back (2015), was not as memorable, there’s a lot of excitement for Welcome 3. Recently, Arshad Warsi spilled the beans and confessed that apart from him, Akshay Kumar, Sanjay Dutt and Paresh Rawal are also a part of the third part of the franchise. A few days later, reports emerged that Sanjay Dutt and Arshad Warsi have replaced Anil Kapoor and Nana Patekar in Welcome 3.",
            cat:"Bollywood",
        },
        {
            id:11,
            heading:"Ananya Panday has a picture of Karisma Kapoor stuck on her vanity van’s mirror wall; says, “She has been a huge inspiration”",
            image:"https://stat5.bollywoodhungama.in/wp-content/uploads/2023/07/Ana-Feature.jpg",
            description:"Bollywood actor Ananya Panday recently graced the ramp at India Couture Week 2023 in Delhi, where she walked for designer Rimzim Dadu. In an endearing revelation, Ananya shared that she has long looked up to Karisma Kapoor as an inspiration. The young actress even admitted to having a picture of Karisma Kapoor adorning her vanity wall, signifying the admiration and respect she holds for the Bollywood star",
            cat:"Bollywood",
        },
        {
            id:12,
            heading:"Shah Rukh Khan said ‘main sambhal lunga Pakistani actor Humayun Saeed recalls how SRK was helpful ahead of a stage show in 2005",
            image:"https://stat4.bollywoodhungama.in/wp-content/uploads/2023/07/Pakistani-actor-Humayun-Saeed-recalls-how-SRK-was-helpful-ahead-of-a-stage-show-in-2005.jpg",
            description:"Pakistani actor Humayun Saeed, who was last seen in Netflix’s The Crown as Dr. Hasnat Khan, recently spoke to Bollywood Hungama about his Urdu show Mere Paas Tum Ho arriving on Indian TV channel Zindagi soon, his experience on working on the Netflix series The Crown, and memories of sharing the stage with Shah Rukh Khan.",
            cat:"Bollywood",
        },
        {
            id:13,
            heading:"Oppenheimer Box Office Day 10 (India): Christopher Nolan’s Film Keeps Rising, Is A Solid Hit!",
            image:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/box-office-oppenheimer-keeps-rising-on-sunday-as-well-is-a-solid-hit-01.jpg",
            description:"Oppenheimer had yet another wonderful day at the box office with 7 crores* more added to its total. The trend has been quite positive for this biggie which was expected to do well in India, but the manner in which it has continued to keep the momentum on is commendable. The film is being lapped up by urban audiences, and to think of it, it’s primarily the English version which is bringing in the most moolah.",
            cat:"Hollywood",
        },
        {
            id:14,
            heading:"Barbie Box Office Day 10 (India): Margot Robbie Starrer Aims For 45 Crores+ After Second Weekend",
            image:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/box-office-barbie-now-aims-for-45-crores-in-india-after-second-weekend-sunday-updates-01.jpg",
            description:"Barbie has managed to do mid-size business in the Indian market, what with 45 crores+ lifetime guaranteed after the progress shown in the second weekend. The film exceeded expectations on the very first day by opening at 4.50 crores* and while it had a good weekend followed by stable weekdays, even the second weekend has been on the right track.",
            cat:"Hollywood",
        },
        {
            id:15,
            heading:"Kate Middleton and Prince William have ‘sassy nicknames’ for each other",
            image:"https://www.hindustantimes.com/ht-img/img/2023/07/31/550x309/britain-royal-wedding_4bb2eb20-c252-11e9-8b78-a387d3830b78_1690791175638.jpg",
            description:"A royal author has revealed that Kate and William have some adorable nicknames for each other.Despite being royals, Kate Middleton and Prince William are very much like any other married couple. According to a report by The Mirror, a royal author has revealed that Kate and William have some adorable nicknames for each other.Tom Quinn, author of Gilded Youth: An Intimate History of Growing Up in the Royal Family, has revealed that palace staff told him the nicknames that the royal couple use for each other.",
            cat:"Hollywood",
        },
        {
            id:16,
            heading:"Emmy Awards 2023: Ceremony postponed as Hollywood actors and writers strike",
            image:"https://ichef.bbci.co.uk/news/976/cpsprodpb/15387/production/_126691968_emmyzendayareu_cut.jpg.webp",
            description:"The Emmy Awards, which had been due to take place in September, have been postponed due to Hollywood strikes.Members of the Writers Guild of America and Screen Actors Guild are striking in the biggest walkout for 60 years.It means those in the unions can't work or do any publicity, so can't appear at awards shows.A new date for the 2023 ceremony has not been confirmed, but organisers want to wait until an agreement has been reached with TV companies.",
            cat:"Hollywood",
        },
        {
            id:17,
            heading:"Hollywood’s Slo-Mo Self-Sabotage",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB3PUwf1EO6RArld_lfqg58b85HQ2ASr4IUClXefKHN2xgPuwD",
            description:"Since the streaming era, movies and television feel less special, labor conditions have plummeted, and turbulent mergers and layoffs call into question which legendary institutions will still stand in another ten or twenty years.Black Mirror, the anthology series best known for dreaming up dystopian uses for near-future technology, took aim at its own network in the timeliest episode of its most recent season. Settling on her couch after a difficult stretch at work, a woman named Joan (Annie Murphy) logs on to Streamberry, a barely veiled stand-in for Netflix, and stumbles upon a TV show based on the events of her day: Joan Is Awful,starring Salma Hayek. The program proceeds to ruin her life, but it’s nothing personal Streamberry, which runs on cutting-edge algorithms, made Joan Is Awful with no human input.",
            cat:"Hollywood",
        },
        {
            id:18,
            heading:"Johnny Depp Fans Scream “Captain Jack Sparrow Rocks” During Hollywood Vampires’ US Tour, Making All Of Us Demand Pirates Of The Caribbean Comeback More Than Ever!",
            image:"https://www.pinkvilla.com/images/2023-05/1272840969_fotojet-2023-05-17t222833-477.jpg",
            description:"The Johnny Depp hard rock supergroup Hollywood Vampires is on the road, and despite encountering some problems such as Depp passing out or walking through a crutch, the band isn’t stopping.Now entering their US tour, the band received a great welcome by audiences, with Johnny Depp thanking the fans for their warm welcome.",
            cat:"Hollywood",
        },
        {
            id:19,
            heading:"The Mattel Doll Loses Out To Christopher Nolan, The Bomb And The Bhagvad Gita In India",
            image:"https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1690721006.webp",
            description:"Greta Gerwig's Barbie may be leading the Barbenheimer sweepstakes internationally, but Oppenheimer, despite its dark overtones, has bombed out its competition in India -- earning Rs 77 crore in its first eight days, compared with Rs 29 crore made by Barbie.In fact, the Cillian Murphy-headlined biopic helmed by Christopher Nolan made more money on its first day -- Rs 14.5 crore on July 21 -- than the much-hyped Ranveer Singh- and Alia Bhatt-starrer Rocky Aur Rani Kii Prem Kahaani -- Rs 11.5 crore on July 28.",
            cat:"Hollywood",
        },
        {
            id:20,
            heading:"Captain Marvel 2 Receives Historic Funko Pop Set",
            image:"https://images.thedirect.com/media/article_full/captain-funkos.jpg?imgeng=cmpr_75/",
            description:"Funko officially unveiled a historic new MCU vinyl figure set that highlights the main three heroes of The Marvels. Marketing for The Marvels aka Captain Marvel 2 has been ramping up in the past weeks. Marvel Studios recently released a new trailer for the upcoming Brie Larson-led sequel, showcasing fresh footage and hints about the movie's story.Moreover, new looks at official merchandise already made their way online, such as new Funko Pop! vinyl figures for the main characters.",
            cat:"Hollywood",
        },
        {
            id:21,
            heading:"Andrew Garfield feels that there is endless potential in reprising as Spider-Man",
            image:"https://static.toiimg.com/thumb/msid-102269156,imgsize-37654,width-400,resizemode-4/102269156.jpg",
            description:"Andrew Garfield revealed what Spider-Man's future may contain by admitting that he would love to play the lead characters role again.The 39-year-old actor has featured in three Spider-Man movie ",
            cat:"Hollywood",
        },
        {
            id:22,
            heading:"‘Superman’ Henry Cavill’s Final Appearance From The Flash Goes Viral & Is Being Labelled The Most Disappointing As Fans Brutally Slam The Studio: “WB Has F*cked Him More Than His GF”",
            image:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/henry-cavills-last-appearance-from-the-flash-as-superman-is-getting-disappointing-reactions-01.jpg",
            description:"Amongst a lot other things that The Flash starring Ezra Miller is criticized for, its CGI stands on the top spot and the movie has already received a whole lot of flack for its labelled ‘bad CGI’. While the movie now is on streaming and many are watching it only to understand the uproar against it, and that only means that the dissection will be more rigorous now because the pause, play, and rewind buttons are in the hands of the viewer. This has now led to a netizens posting Henry Cavill’s still from his cameo or his CGIed cameo, and fans are trolling the studio again.",
            cat:"Hollywood",
        },
        {
            id:23,
            heading:"Ariana Grande Gets Accused By A Musician Of Stealing Her Boyfriend In 2010 When She Was On A Break With Graham Phillips, Netizens Say, “Something Is Very Wrong With Her”",
            image:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/ariana-grande-gets-accused-by-a-musician-of-stealing-her-boyfriend-in-2010-when-she-was-on-a-break-with-graham-phillips-netizens-say-something-is-very-wrong-with-her.jpg",
            description:"Ariana Grande has been dubbed a homewrecker ever since her new relationship with actor Ethan Slater came into the limelight. The latter was towards their split with wife Lilly Jay when the two started dating. Ariana and Ethan have been constantly facing the heat from the Internet and if this was not enough, a musician and actress Rikki Valentina on TikTok has alleged that Ariana stole her boyfriend too when she was on a break with her Graham Philips. Scroll down to know the scoop.",
            cat:"Hollywood",
        },
        {
            id:24,
            heading:"Sam Asghari Reveals His Mother Survived A Major Accident He Confirms She Is Okay & Resting It Off Now While Thanking The Medical Staff",
            image:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/sam-asgharis-mum-survives-major-accident-that-sparked-emergency-room-dash-shes-doing-okay-and-resting-it-off-01.jpg",
            description:"Sam Asghari’s mum has survived a “major accident” that led to her being hospitalised. Toxic’ singer Britney Spears’ husband,his mother Fatima Asghari was rushed to the emergency room at Cedars-Sinai hospital in Los Angeles.Today my mother was involved in a major accident. She was taken to the emergency room. With the amazing help of the medical staff and some friends she’s doing okay and resting it off.",
            cat:"Hollywood",
        },
        {
            id:25,
            heading:"Diet score reveals longevity-boosting food items for healthier life",
            image:"https://image.telanganatoday.com/wp-content/uploads/2023/07/Diet-score-eeveals-longevity-boosting-food-items-for-healthier-life_V_jpg--816x480-4g.webp?sw=1366&dsz=816x480&iw=659&p=false&r=1",
            description:"The study builds on previous research that found foods that are good for both human health and the environment, such as whole grains, fruit, non-starchy vegetables, nuts, and unsaturated oils, as well as meals that are bad for both, including eggs and red and processed meats.",  
            cat:"Food",
        },
        {
            id:26,
            heading:"FERN’s Friday Feed: Are you really what you eat?",
            image:"https://fernnews.wpenginepowered.com/wp-content/uploads/2021/10/GettyImages-pieandmash_clubfoto-e1634066506624.jpeg",
            description:"It is perhaps in the domain of food that Britain’s sentinels of class stand guard the most sternly, dobbing people in for perceived culinary transgressions and demarcating what might, in a nod to Nancy Mitford, be called W (working-class) and non-W foods,” writes Jonathan Nunn. “It’s a bizarrely infantilising view, one that assumes that an interest in better or different foodstuffs is class treason and that puts people in clearly defined boxes, just as much as the identity politics that these commentators supposedly rail against",  
            cat:"Food",
        },
        {
            id:27,
            heading:"National Avocado Day 2023: 3 Delicious Avocado Recipes You Must Try Today",
            image:"https://images.news18.com/ibnlive/uploads/2023/07/untitled-design-261-16907943553x2.png?impolicy=website&width=510&height=356",
            description:"National Avocado Day, celebrated on July 31st, honours the beloved fruit renowned for its creamy texture and numerous health benefits.This occasion encourages people worldwide to indulge in delicious avocado dishes, from guacamole to smoothies, while appreciating the fruit’s versatility and contribution to a balanced diet. Avocado enthusiasts unite in celebration! We have rounded 3 avocado recipes for you to try. Mix all ingredients in right proportion to make dressing Place Avocado slice, arugula and cherry tomatoes in a bowl and mix with dressing gently Refrigerate for 5 -10 min Serve cold on a bed of lettuce leaves, with some fresh mint leaves on top",  
            cat:"Food",
        },
        {
            id:28,
            heading:"Nuts About Flavour: 3 Irresistible Recipes with Pistachios",
            image:"https://images.news18.com/ibnlive/uploads/2023/07/untitled-design-259-16907936603x2.png?impolicy=website&width=510&height=356",
            description:"Pistachios are versatile nuts that add a rich, nutty flavor to both sweet and savoury dishes. Crushed pistachios make a wonderful crust for meats or add a crunchy topping to salads.In desserts, they enhance the taste and presentation of cakes, cookies, and ice creams.Moreover, pistachios boast a nutritional profile, packed with protein, healthy fats, vitamins, and minerals.Whether as a complement to a main course or a starring ingredient in desserts, incorporating pistachios into recipes elevates the culinary experience with their distinct taste and added nutritional value.We have curated 3 recipes featuring pistachios that are sure to offer a delightful blend of taste, texture, and health benefits.",  
            cat:"Food",
        },
        {
            id:29,
            heading:"3 Easy Recipes For Your Rainy Day Cravings",
            image:"https://images.news18.com/ibnlive/uploads/2023/07/zodiac-sign-most-likely-to-fall-in-love-with-each-other-16907869753x2.png?impolicy=website&width=510&height=356",
            description:"Rainy days often bring about a cozy and nostalgic feeling, conjuring up images of warm blankets, steaming mugs of cocoa, and comfort food to satisfy those insatiable cravings.Whether you’re lounging indoors or watching the raindrops fall from your window, there’s no better time to indulge in some easy-to-make, delectable treats.To help you make the most of these rainy moments, we’ve compiled a delightful list of mouthwatering recipes that will elevate your rainy day experience.These simple yet satisfying dishes are sure to bring a ray of culinary sunshine to your day. So, get your apron ready, and let’s dive into these easy recipes to appease your rainy day cravings.",  
            cat:"Food",
        },
        {
            id:30,
            heading:"This Lauki Dosa Could Be Ideal For Your Lose Weight Journey",
            image:"https://images.news18.com/ibnlive/uploads/2023/06/untitled-design-2023-06-12t170328.339-16865696173x2.jpg?impolicy=website&width=510&height=356",
            description:"The process of maintaining a diet chart can often prove to be rigorous and quite difficult. While we all try many tricks to lose weight, resisting cravings and adhering to strict meal plans aren’t easyIn that case, how about a healthy twist on your all-time favorites? The aim is to avoid foods that cause harm and incorporate ingredients which are considered to be good for overall development. One can always try to be a bit creative with good ingredients and still manage to enjoy a wholesome and delicious plate.Nutritionist, Jonna Priyanka believes that dosas, “when eaten as per your portions, it helps in losing weight and healing health.She explains that in everyday dosa, we are used to having basically three parts of rice with one part of urad dal, which results in consumption of less protein and more carbs",  
            cat:"Food",
        },
        {
            id:31,
            heading:"Summer's Golden Gems: Unleash the Magic of Corn with These Recipes",
            image:"https://images.news18.com/ibnlive/uploads/2023/07/untitled-design-226-16904450073x2.png?impolicy=website&width=510&height=356",
            description:"Indulge in the essence of summer with these delightful corn recipes! Bursting with sweet and juicy flavors, these dishes promise to be your go-to summer treats.From grilled corn on the cob with zesty toppings to refreshing corn salads, savour the season’s bounty with every delectable bite.Check out these delectable recipes from Chef Sohail Karimi, Executive chef, Radisson Blu Resort and convention Centre Karjat.To prepare Corn Cheese Balls Recipe, get all the ingredients handy- grate the cheese, boil veggies and mash boiled potatoes.In a mixing bowl, add the grated cheese, boiled and mashed potato, boiled and mashed sweet corn, chop parsley, chop jalapeno, red chili flakes, crushed oregano, a little pepper, garlic paste, cornflour and salt and mix everything well.Apply a little oil on your palm and make about 1/2 inches’ balls from the mixture.In a bowl, add all-purpose flour and water and mix them to get pouring consistency batter.In a kadai, heat enough oil to deep fry.Put some plain flour on one side and bread crumbs on the other side on your work surface.Roll the cheese balls in plain flour, dip them in all-purpose flour batter and then in bread crumbs.Repeat the same process to coat all corn and cheese balls in a similar way.Deep fry coated cheese balls on a medium flame.Serve Corn Cheese Balls hot with dips like tomato ketchup and peanut chilli sauce.",  
            cat:"Food",
        },
        {
            id:32,
            heading:"Sizzler Extravaganza: Elevate Your Dining with these Exquisite Recipes",
            image:"https://images.news18.com/ibnlive/uploads/2023/07/untitled-design-223-16904370673x2.png?impolicy=website&width=510&height=356",
            description:"Sizzlers, a sizzling hot dish, tantalize taste buds with a unique dining experience. Combining succulent meats, veggies, and sauces on a sizzling hot plate, they create a delightful symphony of flavors and aromas.The hissing sound and smoky presentation add flair, making sizzlers a favorite choice for food enthusiasts everywhere.Sizzler recipes offer a sizzling and delectable culinary adventure.These dishes combine marinated meats, vegetables, and seasonings on a hot plate, creating a flavorful and memorable dining experience.To try the best sizzlers at home, we have rounded a few recipes from Chef Shaurya Veer Kapoor, Gola Sizzlers.Soak the chickpeas overnight, add all the mentions ingredients except the sesame seeds and put in a grinder and grind it to a level when the mixture is still in granules form.Make round balls and flatten them a little bit only.Stick sesame seeds on the surfaces. Fry them in oil fryer till they get light golden brown colour.",  
            cat:"Food",
        },
        {
            id:33,
            heading:"7 Restaurants To Visit This Weekend",
            image:"https://images.news18.com/ibnlive/uploads/2023/07/untitled-design-178-16899393953x2.png?impolicy=website&width=510&height=356",
            description:"Bored of the same eatery every weekend? Spice it up with these delicious restaurants that guarantee to whip up a storm for your stomach, albeit in the good sense! Exotic dishes to gourmet menus, we have enticing suggestions for a delightful culinary adventure.Elevate your weekend with gastronomic delights that promise to satisfy your taste buds and create lasting memories.Experience the irresistible Monsoon Dumpling Lunch Menu at Nara Thai, the beloved Thai restaurant located in the vibrant Colaba district of Mumbai.Indulge in a variety of mouthwatering dumplings that will transport your taste buds to the rich flavors of Thailand.From succulent prawn dumplings to enticing options of chicken and fresh vegetables, each bite is a culinary delight.Accompanied by a selection of zesty dipping sauces, this lunch experience is the perfect way to embrace the enchanting monsoon season in Mumbai.Visit Nara Thai Colaba and embark on an unforgettable Thai culinary journey. ",  
            cat:"Food",
        },{   
            id:34,
            heading:"Pairing the Right Meat With The Right Liquor for a Healthy Heart",
            image:"https://images.news18.com/ibnlive/uploads/2023/07/untitled-design-161-16897882093x2.png?impolicy=website&width=510&height=356",
            description:"Take three bites of any well-cooked meat, and you’re going to want one thing: a drink. Knowing how to pair meat with certain beverages, like wine, is going to be critical to your entire dining experience. I mean, think about it, does washing down a tasty steak with a glass of water sound ideal? Dr Prashant Mistry, Physiotherapist, nutritionist and celebrity trainer shares the secret to a healthy heart by pairing your meat with the right liquor.Though usually more a practice of fine dining, food and drink pairing is also an essential part of your terrace barbecues. If you’ve got a bigger crowd, you’ll need to think outside the box to create these pairings; but with a little bit of creativity and an understanding of the basic principles of pairing, you’ll easily be able to create fantastic food and beverage combinations on the spot.",
            cat:"Food",
        },
        {
        id:35,
        heading:"The Journey of Pizzas: The Crowd-Favourite Food Has Changed A Lot Over The Years",
        image:"https://images.news18.com/ibnlive/uploads/2023/07/pizza-1-16897710483x2.jpg?impolicy=website&width=510&height=356",
        description:"Pizza is a food that has originated in Italy and transcended borders to become a global food that is available across different countries with their own version. In India, we love a traditional pizza as much as a gourmet pizza. So, how has this dish that symbolises taste and comfort, evolved over the years? The round-shaped dish has taken different forms, but nothing comes to the satisfaction of pulling a slice of pizza topped with cheese and choice of vegetables or meat.Speaking of its origins, Dhaval Udeshi, Co-founder of Chrome Hospitality, says, “Ever been curious to know about the origin of the modern day pizza – how it came to be and some of its original toppings? As random as it may look like, pizza has a vibrant history. Pizza as we know it today has been around for three or so centuries. As early as the 3rd century, our forefathers would blend bread with varieties of toppings. So, we could trace pizza roots back to ancient times.",
        cat:"Food",
    },
    {
    id:36,
    heading:"3 Monsoon Dishes High On Taste And Nutrition You Can't Resist",
    image:"https://images.news18.com/ibnlive/uploads/2023/07/carrot-soup-16896893353x2.jpg?impolicy=website&width=510&height=356",
    description:"People are overjoyed and relieved due to the arrival of the monsoon season. The rains have brought a much-needed respite from the sweltering heat. However, the rains have brought a host of diseases with them. Diseases like dengue, viral fever, the common cold, cough, and the flu are a few diseases that are quite common in the monsoon season. It has become significant to take care of our health in the drizzle season, after all, prevention is better than cure. People opt for various ways by which they can take care of themselves in the rainy season. Some create different versions of herbal teas and Kadhas to keep themselves healthy and strengthen their immune system. While some rely on nutritious soups to bring themselves some comfort in the wet season and prevent themselves from diseases.A soul-satisfying dish which is healthier at the same time, carrot soup when infused with Ginger can help in strengthening your immunity system. The sweetness of carrots when combined with the strong flavour of Ginger, can satisfy one’s taste buds and can also provide nutrition at the same time.",
    cat:"Food",
},
    // {
    //     id:37,
    //     heading:"National Ice Cream Day: 4 Recipes To Try At Home",
    //     image:"https://images.news18.com/ibnlive/uploads/2023/07/honey-dream-delight-ice-cream.png?impolicy=website&width=0&height=0",
    //     description:"National Ice Cream Day is a delightful celebration of everyone’s favorite frozen treat. Ice creams are universal additions to celebrations, people from around the world love to indulge their taste buds in this decadence. Classic vanilla bean, refreshing strawberry sorbet, rich chocolate fudge, and creamy cookies and cream are some of the most favourites across the world. With ice cream connoisseurs ready to experiment with their palate, chefs have started creating drool worthy flavours. Here are 4 recipes to try today!.",
    //     cat:"Food",
    // },
    // {
    //     id:38,
    //     heading:"A World of Flavour: Exploring the Different Types of Tea.",
    //     image:"https://images.news18.com/ibnlive/uploads/2023/07/shutterstock_217720432-1-16893578453x2.jpg?impolicy=website&width=510&height=356",
    //     description:"All of us like our tea to be hot! Whether you prefer the masala chai or the famous Darjeeling tea, a hot cup of chai is a must in every Indian household. And constant memes on this beverage are proof.Let’s embark on a flavorful journey and explore various types of tea and their unique characteristics. If you are just into the desi doodh wali chai, widen your palette with the delicate green teas, robust black teas and aromatic herbal infusions.Rajeev Baid, CEO & MD of Chai Chun, says, “Tea is a beloved and widely consumed beverage worldwide, with a deep-rooted history. This delightful drink offers a diverse array of exquisite flavours and varieties, including India’s renowned Darjeeling Tea, Assam Tea, Kangra Tea, and Nilgiri Tea. India stands out for its unique tea preparation methods, resulting in captivating tastes and aromas across different regions. Additionally, Kashmir offers Noon Chai and Kashmiri Kahwa, while Ladakh is famous for its Butter tea. Adding to the tapestry of flavours is the well-known Masala chai, infused with aromatic spices.",
    //     cat:"Food",
    // },
    // {
    //     id:39,
    //     heading:"3 Ways To Elevate Maggi And Make It Your Favourite Monsoon Snacking Partner; Recipes Inside",

    //     image:"https://images.news18.com/ibnlive/uploads/2023/07/untitled-design-43-2-16890533023x2.png?impolicy=website&width=510&height=356.",
    //     description:"Maggi is not just a food, it is rather an emotion-it is one of those things that we can never move past. For years, Indian households have celebrated the very taste of maggi and why wouldn’t they, the blend of spices in it defines our palettes so well. While maggi is something most Indians love there is something else that every Indian cherishes too and that is snacking on a rainy day.It is the monsoon season and if you are someone who is slowly running out of ideas for snacks then you are not the only one. What if we told you that you can use Maggi and make some really elevated and cool snacks with it? Yes, you heard that right.",
    //     cat:"Food",
    // },
    {
        id:37,
        heading:"Best electric toothbrush deals: Save on Colgate, Quip and Oral-B.",
        image:"https://www.digitaltrends.com/wp-content/uploads/2023/07/Oral-B-3D-White-Battery-Toothbrush.jpg?fit=720%2C360&p=1",
        description:"A great electric toothbrush is an important addition to your life. You’re only got one set of teeth after all, and who wants to go to the dentist for treatment that could have been avoided? While always a great investment, electric toothbrushes don’t have to cost a fortune either which is why we’ve picked out the best electric toothbrush deals around right now. Below are devices in varying price ranges that all should help keep your teeth cleaner than if you relied solely on manual brushing. Some even have cool smart features because the best smart home devices can be even more personal than the usual array you might be thinking of. Let’s take a look at the best.For convenience, an electric toothbrush with a rechargeable battery is useful, but if you just need a quick solution for occasional use, the Oral-B 3D White Battery Toothbrush is cheap and effective. It comes with its own AA battery with replacements easily sourced. Its brush head has rubberized bristles while there’s an action cup that helps to whiten teeth by removing surface stains. It cleans with 14,000 strokes per minute so it’s speedy while highly capable of clearing away debris and reaching between teeth.A great electric toothbrush is an important addition to your life. You’re only got one set of teeth after all, and who wants to go to the dentist for treatment that could have been avoided? While always a great investment, electric toothbrushes don’t have to cost a fortune either which is why we’ve picked out the best electric toothbrush deals around right now. Below are devices in varying price ranges that all should help keep your teeth cleaner than if you relied solely on manual brushing. Some even have cool smart features because the best smart home devices can be even more personal than the usual array you might be thinking of. Let’s take a look at the best.For convenience, an electric toothbrush with a rechargeable battery is useful, but if you just need a quick solution for occasional use, the Oral-B 3D White Battery Toothbrush is cheap and effective. It comes with its own AA battery with replacements easily sourced. Its brush head has rubberized bristles while there’s an action cup that helps to whiten teeth by removing surface stains. It cleans with 14,000 strokes per minute so it’s speedy while highly capable of clearing away debris and reaching between teeth.",
        cat:"Fitness"
    },
    {
        id:38,
        heading:"How to pick the best streaming fitness challenge for you",
        image:"https://www.digitaltrends.com/wp-content/uploads/2022/01/ifit-goal-chaser-challenge.jpg?fit=720%2C720&p=1",
        description:"Fitness challenges in one form or another can be found in nearly every fitness subscription service. Most online services, like iFit, showcase their challenges front and center, encouraging you to join their trainers on your next fitness journey. They make it easy to find a challenge and often offer challenges for different activities, like biking, running, or strength training. Other services like Apple Fitness Plus, don’t offer specific challenges but instead group together workouts into a motivational series. Even though they are not branded as a challenge, you can still join them and use them to challenge yourself.When choosing your next challenge, you’ll want to look for one that matches your level of fitness.  If you haven’t sat on your bike in a year, don’t choose a challenge that starts with a killer 20-mile ride. You will set yourself up for failure. Be honest with yourself and choose exercises that are appropriate for your current fitness level. Don’t be ashamed to start from the ground up. You should also pick a challenge that encompasses exercises that you enjoy. Don’t like to run? Then choose a challenge that offers walking or cycling instead. If you are not sure what you want to do, then find a challenge that offers a little bit of everything.Fitness challenges in one form or another can be found in nearly every fitness subscription service. Most online services, like iFit, showcase their challenges front and center, encouraging you to join their trainers on your next fitness journey. They make it easy to find a challenge and often offer challenges for different activities, like biking, running, or strength training. Other services like Apple Fitness Plus, don’t offer specific challenges but instead group together workouts into a motivational series. Even though they are not branded as a challenge, you can still join them and use them to challenge yourself.When choosing your next challenge, you’ll want to look for one that matches your level of fitness.  If you haven’t sat on your bike in a year, don’t choose a challenge that starts with a killer 20-mile ride. You will set yourself up for failure. Be honest with yourself and choose exercises that are appropriate for your current fitness level. Don’t be ashamed to start from the ground up. You should also pick a challenge that encompasses exercises that you enjoy. Don’t like to run? Then choose a challenge that offers walking or cycling instead. If you are not sure what you want to do, then find a challenge that offers a little bit of everything.",
        cat:"Fitness"
    },
    {
        id:39,
        heading:"Withings Body Scan scales go far beyond just showing your weight.",
        image:"https://www.digitaltrends.com/wp-content/uploads/2022/01/withings-body-scan-feet.jpg?fit=720%2C720&p=1",
        description:"Withings’ new Body Scan smart scales go way beyond just measuring your weight, and instead bring monitoring technology you may have only seen at the gym or the doctor’s office into the comfort of your home. Announced during CES 2022, the Body Scan adds body composition data, heart rate and Electrocardiogram (ECG) measurements, nerve response, and vascular age calculations to the usual information given by a smart scale, saying it will, “turn the morning weigh-on into a sophisticated home health check.”The Body Scan has a tempered glass platform with 14 electrodes hidden inside, plus a built-in 3.2-inch color LCD screen to show relevant data and an extendable handle with a further four electrodes in it. These are used for the ECG and to complete the body composition measurement. Using Bioelectrical Impedance Analysis, the Body Scan will assess body fat, visceral fat, bone and muscle mass, and water percentage to provide readings for individual body parts. Over the long-term, this helps understand high-risk areas in your body, along with sports-related data including muscle imbalance.",
        cat:"Fitness"
    },
    {
        id:40,
        heading:"The best exercise tech to help you crush your 2022 fitness goals.",
        image:"https://www.digitaltrends.com/wp-content/uploads/2021/10/the-mirror-on-wall.jpg?fit=720%2C720&p=1",
        description:"If you’re looking for a home workout solution that’ll help you nail your weight loss and health goals for 2022, then you’re in luck. Fitness tech has experienced something of a renaissance in the past few years, and nowadays the home workout gear available to consumers is absolutely incredible. No matter what your preferred workout routine might look like – whether it’s running, rowing, lifting weights, or something else entirely – there’s almost certainly a piece of equipment that’ll allow you to do said workout in the comfort of your own home. Here are a few of our favoritesThis one is pretty straightforward – it’s essentially a full-length mirror that’s souped-up with some smart software that guides you through workouts, connects you with live instructors, and even allows you to compete with other people in your classes. The best part, however, is that Mirror workouts generally don’t require any equipment (though you can use things like dumbbells and resistance bands if you want), so the entire system only takes up a tiny amount of space on your wall. It’s a killer option if you don’t have room for a Peloton bike, but you still want the benefits that come with live classes and instruction.",
        cat:"Fitness"
    },
    {   
        id:41,
        heading:"Capstone Connected launches its smart mirrors built for all lifestyles.",
        image:"https://www.digitaltrends.com/wp-content/uploads/2021/11/o_5ow91q.jpeg?fit=720%2C720&p=1",
        description:
     "Capstone Connected, a brand known for creating consumer-driven products that bridge tech and design, has launched its latest product, dubbed the Thin Cast Smart Mirror. It includes an 18.5-inch touchscreen display, Android compatibility, dual speakers, and two ways to interact with them. They also come in two sizes and are built with multiple lifestyles in mind.The smart mirrors come in two distinct models. The standard model measures 32.5 x 22.5 x 1.25-inches and weighs 16 pounds. This model is ideal for hanging around the house in places such as an entryway, kitchen, or behind a vanity. The full-length model is named the Fitness/Lifestyle model, and it measures 60 x 22.5 x 1.25-inches and weighs 37 pounds. The Fitness/Lifestyle model is perfect for bedrooms or even home gyms. Both mirrors come easy to install with their own mounting gear and hardware for wall hanging or floor-standing installations. After installing the mirror, just plug it into a power outlet, connect to Wi-Fi, and choose which way you want to interact with it — then you’re off to the races.",
     cat:"Fitness"
    },
    {   
        id:42,
        heading:"This fold-up smart home gym packs 100+ exercises, takes up minimal space",
   image:"https://www.digitaltrends.com/wp-content/uploads/2021/11/speediance-home-gym-kickstater-1.jpeg?fit=720%2C720&p=1",
   description:
"With the pandemic still keeping people indoors, going to the gym may seem all but impossible. That’s where Speediance comes in. Speediance is an all-in-one smart home gym that allows you to do more than 100 exercises with ease. Best of all, it has a small footprint when stowed so that you don’t have to turn your living room into a full YMCA.Speediance comes with a 21.5-inch touchscreen hanging from a curved support beam hoisted above the base where the gears and processor live. The design negates the need for installation or wall mounting and, when folded up, it only takes up 3.2 square feet of space. There are four attachment loops located around the support bar that allows you to use Speediance with your favorite weight accessories.Speaking of accessories, Speediance comes with its own set of smart accessories. These accessories include a bar, bench, resistance straps, and more. There’s something to target every muscle group in your body. Speediance allows you to lift to 220 pounds of digital weight and do over 100 exercises, from bicep curls to back squats and everything in between.",
cat:"Fitness"
    },
    {   
        id:43,
        heading:"How to start or join a group workout on Fitness.",
   image:"https://www.digitaltrends.com/wp-content/uploads/2021/06/facetime-ios-share-play-apple-tv-copy.jpg?fit=720%2C720&p=1",
   description:"Apple Fitness+ is an excellent tool for folks who want to maintain their fitness without joining a gym or purchasing expensive home gym equipment. The fitness program has solo exercises for all levels and recently added group workouts allowing users to exercise with friends and family. You can create your own group workout session or join one that was created by a friend. Find out how to use these group workouts to exercise with your friends, family, and other Fitness+ users.Fitness+ group workouts are powered by Apple’s SharePlay feature that was added in iOS 15. SharePlay is designed to create a shared experience across Apple devices and services. The socially focused feature integrates into FaceTime and allows you to connect with your friends and family for more than just a video call. You can listen to music, watch TV, and even work out together with those on your contact list.",
cat:"Fitness"
    },
    {   
        id:44,
        heading:"How technology is helping (re)shape the fitness industry",
        image:"https://images.indianexpress.com/2023/04/boom-of-fitness-sector.jpg?w=640",
        description:"When Usha Ayyagari, a 25-year-old management student, enrolled herself in yoga classes in January 2020, little did she know that something called ‘Covid-19’ was lurking nearby, all set to derail her plans. Soon, the pandemic struck and Ayyagari was among the millions who got restricted to the confines of their homes across the globe. But that did not deter her resolve to work on her health, and luckily for her, her yoga classes went online. “The pandemic also made me more fitness conscious and I lost about 7-8 kg by being regular with my classes, giving up junk food, and only eating home-cooked food made by my mum,” she told indianexpress.com.Similarly, Purnima Jha, 26, started her fitness journey in 2019 after gaining weight and feeling unhealthy. Much like Ayyagari, she too turned to online training and hired a personal trainer amid the pandemic. “Slightly wary of my form and posture, I started working out with a personal trainer online so that there would be somebody to correct my form, if required. Online fitness classes actually turned out to be very convenient, and effective,” she told indianexpress.com.",
     cat:"Fitness"
    },
    {   
        id:45,
        heading:"Lunge – the new gym match dating app",
   image:"https://www.fitnesstechnologytoday.com/wp-content/uploads/2023/01/lunge-app-gym.jpg",
   description:"If meeting somebody ‘just like you’ is a requirement for a successful relationship, then US dating app ‘Lunge’ is on the right track with its gym matching service. Dating apps have long used algorithms to match users based on shared interests, personal preferences, and location. Marketing itself as ‘The dating app for meeting people only at your gym’, Lunge claims to be the first dating app to match people at the same gym OR exercise classes.A previous US app in the fitness space was launched in 2015 called ‘SWEATT’. It was supposed to be the ‘all-new dating app for the fitness community’ but 8 years later it is no longer available to download. Another UK gym dating app ‘FITFCK’ arrived on the scene in 2017 and was back in the press in late 2022 with an announcement that it had secured backing from OnlyFans’ founder Tim Stokely who invested at a £3m+ valuation. FITFCK didn’t get great Appstore reviews the first time around due to a low user base, time will tell if those issues are resolved.",
cat:"Fitness"
    },
    {   
        id:46,
        heading:"Multinational tech company Garmin which acquired Tacx in 2019",
        image:"https://www.fitnesstechnologytoday.com/wp-content/uploads/2022/11/garmin-tacx.jpg",
        description:"Multinational tech company Garmin which acquired Tacx in 2019, has announced that the Tacx® NEO Bike Plus, will be available to US buyers from January 2023 at a suggested retail price of US$3,999.99. The indoor smart bike is already shipping to UK buyers at £3499.From the comfort of the home, the Tacx NEO Bike Plus offers buyers a quiet ride and accurate power, speed and cadence metrics – even in sprints. Fully adjustable, the Tacx NEO Bike Plus can quickly be customised to match the fit of an outdoor bike and is designed to be used by multiple athletes in the household.We are thrilled to bring innovative updates to the Tacx NEO Bike Plus to make it one of the most adaptable and engaging smart bikes available,” said Dan Bartel, Garmin vice president of global consumer sales.",
     cat:"Fitness"
    },
    {   
        id:47,
        heading:"GoodRx now offers an iOS 'Medicine Cabinet' for managing prescription meds",
   image:"https://s.yimg.com/uu/api/res/1.2/dOJV3D5aWWGZa8PbSMjvlg--~B/aD0xMDgwO3c9MTkyMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-07/7d9fe5f0-2bff-11ee-bff6-71aabe0ba8eb.cf.webp",
  description:"GoodRx, best known for its prescription drug price comparison tool, has launched a new free offering called “Medicine Cabinet.” The tool will allow GoodRx app users to manage their prescription medications on a single platform. This comes on the heels of the news that the company is working with CVS Health to develop the Caremark Cost Saver, which could lower pharmacy out-of-pocket drug costs for shoppers.The Medicine Cabinet also includes a dashboard for GoodRx’s rewards program which offers users monetary perks like e-gift cards for staying on top of medication refills. “Nobody's integrating or rewarding people for having those healthy habits,” Hull said.",
cat:"Fitness"
    },
    {   
        id:48,
        heading:"Scientists make ibuprofen and other common painkillers from paper industry waste.",
   image:"https://s.yimg.com/uu/api/res/1.2/MjRA5d5VE7jm9h0BCSHK9g--~B/Zmk9ZmlsbDtoPTU4NTt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-07/027d6500-1e85-11ee-afe6-35428cf41344.cf.webp",
   description:"It's probably fair to say that when most people conjure images of the pharmaceutical industry, it's not often there's an association between the production of life-saving drugs and environmental decline. But according to one 2019 study by The Conversation, drug companies produce more tonnes of carbon dioxide equivalents per million dollars than the automotive industry. By our calculations, the pharma market is 28 percent smaller yet 13 percent more polluting than the automotive sector, the outlet said of the state of the pharmaceutical industry in 2015. Put another way: drug companies need to reduce their carbon emissions for the health of the planet and everyone living on it.It's probably fair to say that when most people conjure images of the pharmaceutical industry, it's not often there's an association between the production of life-saving drugs and environmental decline. But according to one 2019 study by The Conversation, drug companies produce more tonnes of carbon dioxide equivalents per million dollars than the automotive industry. By our calculations, the pharma market is 28 percent smaller yet 13 percent more polluting than the automotive sector, the outlet said of the state of the pharmaceutical industry in 2015. Put another way: drug companies need to reduce their carbon emissions for the health of the planet and everyone living on it.",
    cat:"Fitness"
    },
    {   
        id:49,
        heading :"iPhone 15: 11 things we know about Apple’s next-gen smartphone series.",

 image:"https://images.indianexpress.com/2023/07/iphone-15-pro-renders.jpg?w=640",

 description: "We’re mere weeks away from September, the time best-known for the debut of the new iPhone. 	Traditionally, Apple has hosted its flagship event every September, during which it reveals the new iPhone 	lineup as well as other must-have gadgets for the holiday season. While the last few generations of iPhones 	have mostly delivered iterative upgrades, the iPhone 15 series is expected to deliver a generational leap 	over last generation models. Here are all the new changes we can expect from the upcoming iPhone 15 series.The iPhone 15 and the iPhone 15 Plus are said to borrow the iPhone 14 series design, featuring a flat aluminium frame, and dual-camera setup on the back. Meanwhile, the flagship iPhone 15 Pro and the iPhone 15 Pro Max will be the first set of iPhones to use a titanium frame.",
cat:"Tech"
    },
    {   
        id:50,
        heading:"Musk draws heat from San Francisco over giant X logo.",
image: "https://images.indianexpress.com/2023/07/x-twitter-office.jpg?w=640",
description:"A giant, glowing X marks the San Francisco spot where Elon Musk says he plans to keep his company, the messaging platform X, formerly known as Twitter. But city officials and some residents are unhappy with the display.On Friday, the company erected an “X” logo on the roof of its Market Street headquarters, to the chagrin of neighbors who complained about intrusive lights, and San Francisco’s Department of Building Inspection which said it is investigating the structure.The move followed a post from Musk, the enigmatic billionaire who acquired the company in October for $44 billion, announcing the newly named firm would remain in San Francisco despite what he termed the city’s recent “doom spiral, with one company after another left or leaving.",
cat:"Tech"
    },
    {   
        id:51,
        heading:"Google introduces ‘Unknown Tracker Alert’ feature for Android.",
        image:"https://images.indianexpress.com/2023/07/Unknown-Tracker-Google-1.jpg?w=640",
       description:"Earlier this year, Google announced that it was working with Apple on a new safety feature called ‘Unknown Tracker Alerts’ which can notify users about unwanted Bluetooth trackers travelling with them.While Bluetooth trackers like AirTags and Tiles are often used to track or find lost items, many have used them for stalking other people and committing crimes like planned car theft.Available on devices running Android 6 Marshmellow or later, the Unknown Tracker Alerts feature works by sending users a notification if it finds a Bluetooth tracker that does not belong to them is travelling with them.If you want more details, just tap on the notification and you will be able to see the location on a map which shows when the tracker started following them. Users can also reveal the serial number and information of the owner by bringing the tracker near the back of their phone. In case you want to locate the tracker without notifying the owner, use the ‘Play Sound’ option.",
      cat:"Tech"
    },
    {   
        id:52,
        heading:"Aided by AI language models, Google’s robots are getting smart.",

image:"https://images.indianexpress.com/2023/07/google-robots.jpg?w=640",

description:"Until very recently, this demonstration, which I witnessed during a podcast interview at Google’s robotics division in Mountain View, California, last week, would have been impossible. Robots weren’t able to reliably manipulate objects they had never seen before, and they certainly weren’t capable of making the logical leap from “extinct animal” to “plastic dinosaur.”But a quiet revolution is underway in robotics, one that piggybacks on recent advances in so-called large language models — the same type of artificial intelligence system that powers ChatGPT, Bard and other chatbots.Google has recently begun plugging state-of-the-art language models into its robots, giving them the equivalent of artificial brains. The secretive project has made the robots far smarter and given them new powers of understanding and problem-solving.",
cat:"Tech"
    },
    {   
        id:53,
        heading :"ISRO successfully places seven Singaporean satellites into intended orbit",
image:"https://images.indianexpress.com/2023/07/F2QIexIbYAAlpzd.jpg?w=640",

description:"ISRO successfully launched its proven PSLV rocket carrying seven Singaporean satellites Sunday from Satish Dhawan Space Centre in Sriharikota, Andhra Pradesh and placed them into intended orbits.Around 23 minutes after lift-off, the primary satellite got separated and it was followed by six other co-passenger satellites, which were deployed into the intended orbits sequentially, ISRO said.On the successful launch and separation of the satellites, ISRO posted on Twitter, “PSLV-C56/DS-SAR Mission: The mission is successfully accomplished. PSLV-C56 vehicle launched all seven satellites precisely into their intended orbits. Thanks to @NSIL_India and Singapore, for the contract.” This ISRO mission, which comes after the much-awaited Chandrayaan-3 launch earlier this month, is being undertaken by its commercial arm NewSpace India Limited.",
cat:"Tech"
    },
    {   
        id:54,
        heading: "LinkedIn likely working on AI ‘coach’ to teach people how to apply for jobs",
 image:"https://images.indianexpress.com/2023/07/Linkedin-1.jpg?w=640",
description:"LinkedIn is working on a new AI tool that could make job hunting easier and more efficient, according to a new leak. The tool, called LinkedIn Coach, is a chatbot that can assist users with various aspects of their career development, such as applying for jobs, learning new skills, and networking with others.The screenshot shared by Owji suggests users ask the chatbot things like “How does Coach work?” or “What is the culture of Microsoft?” It seems inevitable that AI-powered assistants would eventually find their way to the professional social platform, given that it is a subsidiary of Microsoft.LinkedIn has been investing heavily in generative AI it seems — coach is not the first AI-powered feature that the platform has introduced. The company has been constantly adding generative AI features that can help users create and improve their profiles, resumes, and cover letters. For instance, LinkedIn has a resume builder tool that can generate a resume based on the user’s profile information. It also has a cover letter assistance tool that can provide suggestions and examples for writing a cover letter.",
cat:"Tech"
    },
    {   
        id:55,
        heading:"How do you keep underwear clean in space? ESA is working on it.",
image: "https://images.indianexpress.com/2023/07/spacesuit-underwear-20230728.jpg?w=640",

description:"Keeping your underwear clean on Earth is easy enough. You can use washing machines or even manually wash them. But what about astronauts who go on long-term space missions? Washing spacesuits is not practical and sometimes, they might have to share the inner lining of the suits they use. The European Space Agency (ESA) is working on anti-microbial solutions that can be used in space.The agency’s PExTEx project, which stands for Planetary Exploration Textiles, assesses suitable textiles for future spacesuit design. The most obvious dangers for astronauts in space come from outside—extreme temperature, space radiation and highly abrasive dust.The most obvious hazards are the external ones: moonwalkers venturing out of lunar bases will have to contend not only with hard vacuum but also wild temperature extremes, space radiation and highly abrasive dust – which partially jammed the seals of Apollo spacesuits within just a few hours of exposure while compromising their outermost layers.",
cat:"Tech"
    },
    {   
        id:56,
        heading:"New Opera GX feature will handle your unvirtuous browser history after you die",
 image:"https://images.indianexpress.com/2023/07/Opera-GX-Fake-My-History-featured.jpg?w=640",
description:"Some folks spend their days fretting over their fate in the great beyond, but they’re missing the real question: what will become of their browser history when they die? Imagine the horror of your nosy partner discovering your online indulgences, shattering the saintly image you worked so hard to maintain. With a new feature on Opera GX, these worries will be a thing of the past.The browser has announced a new feature that will help users preserve their online reputation after death. Called “Fake My History,” the feature automatically replaces your guilty pleasures with wholesome and respectable searches such as “local volunteer opportunities”, “free online courses for personal growth”, “how to encourage voting in my community”, and “how to build a birdhouse”.Here’s how it works: After 14 days of inactivity, Opera GX makes the assumption of your passing and quickly gets to work, replacing your not-so-proud moments with carefully selected, pre-defined set of various URLs. There’s no pressure, though – the feature is optional and can be enabled or disabled from the browser settings.",
cat:"Tech"
    },
    {   
        id:57,
        heading:"WhatsApp introduces instant video messages.",
  image:"https://images.indianexpress.com/2023/07/WhatsApp-Video-Messaging-featured.jpg?w=640",
  description:"Meta has launched a new WhatsApp feature that allows users to send and receive short video messages in their chats, adding more emotion and personality to the messaging experience.Instant video messages are similar to voice messages, but with video. The recording process is also similar to voice messages. Users can tap the icon to the right of the text field to switch to video mode and share up to 60 seconds of video with their contacts. They can also swipe up to lock and record the video hands-free.Likely to distinguish from regular videos, video messages show up in a circular form in chats. They play automatically on mute but users can tap on them to hear the sound.Instant video messages are similar to voice messages, but with video. The recording process is also similar to voice messages. Users can tap the icon to the right of the text field to switch to video mode and share up to 60 seconds of video with their contacts. They can also swipe up to lock and record the video hands-free.",
cat:"Tech"
    },
    {   
        id:58,
        heading:"NASA, DARPA select Lockheed Martin to develop nuclear rocket engine",
	image:"https://images.indianexpress.com/2023/07/NASA-DRACO-202307276.jpg?w=640",
    description:"The American National Aeronautics and Space Administration (NASA) and Defense Advanced Research Projects Agency (DARPA) Tuesday announced the selection of Lockheed Martin to develop a nuclear propulsion engine that could be demonstrated as early as 2027.Nuclear thermal engines are aimed at reducing transit times in space, which in turn would translate to reduced risks for astronauts.Faster transits could also be crucial for long-term missions to Mars and beyond because they would help reduce the amount of supplies and the robustness of systems required for space travel. Also, a nuclear thermal engine would have a higher payload capacity while providing higher power that can be used for instruments and communications.",
cat:"Tech"
    },
    {   
        id:59,
        heading:"Former intelligence officer says US possesses UFOs and ‘non-human biologics.",
   image:"https://images.indianexpress.com/2023/06/Alien-ship-20230607.jpg?w=640",
   description:"Former United States Air Force intelligence officer David Grusch had earlier made claims that the country is in possession of alien aircraft. Grusch on Wednesday made the same claims while testifying to the US Congress under oath, also hinting that the country may be in possession of alien bodies.Grusch claims that the country’s government conducted a “multi-decade” program where it collected and attempted to reverse-engineer crashed unidentified flying objects (UFOs), according to The Guardian. He led the analysis of unexplained anomalous phenomena (UAP, an official US government term for UFOs) within the Department of Defense until recently.He also goes on to claim that he has been denied access to secret government UFO programs and that he knows of “people who have been harmed or injured” during the government’s efforts to conceal UFO information.",
cat:"Tech"
    },
    {
    id:60,    
    heading:"Samsung Galaxy Z Flip5 steals the show with larger Flex Window, while Tab S9 can scribble under water.",
   image:"https://images.indianexpress.com/2023/07/Samsung-galaxy-20230726.jpg?w=640",
   description:"Samsung refreshed its foldable flagship smartphones Wednesday, announcing a major hardware upgrade for the budget version even as design improvements have helped it make the devices thinner when folded. At its first Unpacked Event in Seoul, the Korean tech giant showcased a thinner Galaxy Z Fold5, a Galaxy Z Flip5 with a larger Flex Window screen on the front, new Galaxy Tab S9 series that can work even underwater and a Galaxy Watch6 series with better health features.Samsung refreshed its foldable flagship smartphones Wednesday, announcing a major hardware upgrade for the budget version even as design improvements have helped it make the devices thinner when folded. At its first Unpacked Event in Seoul, the Korean tech giant showcased a thinner Galaxy Z Fold5, a Galaxy Z Flip5 with a larger Flex Window screen on the front, new Galaxy Tab S9 series that can work even underwater and a Galaxy Watch6 series with better health features.",
cat:"Tech"
},
// {
//     id:64,    
//     heading:"Portronics launches Beem 410, a portable Android powered projector    ",
//    image:"https://images.indianexpress.com/2023/08/Beem-410.jpg?w=640",
//    description:"Portronics today launched a new portable Android-powered projector called ‘Beem 410’. The smart projector offers a theatre-like experience on the go and works with any white surface or wall.",
//    cat:"Tech"
// },
{
    id:61,    
    heading:"One more tiger dies at Kuno National Park; toll rises to nine",
   image:"data:image/jpeg;base64,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",
   description:"One more cheetah has been confirmed dead at the Kuno National Park, a senior official associated with Project Cheetah told The Hindu on August 2, making it the sixth adult feline to have died since March. While 14 cheetahs — seven males, six females and one female cub — are kept in the bomas in Kuno, a female cheetah is out in the open and is being intensively monitored by a team. Efforts are on to bring her back to the boma for a health examination",
   cat:"HomeLatest"
},
    
{
    id:62,    
    heading:"YouTube celebrates more than two billion logged-in users watching Shorts every month",
   image:"https://th-i.thgim.com/public/incoming/af4tbt/article67149282.ece/alternates/LANDSCAPE_1200/2023-06-21T033527Z_1358902842_RC2EN1A08DRC_RTRMADP_3_YOUTUBE-SOUTHKOREA.JPG",
   description:"YouTube said on Tuesday that its Shorts videos were being watched by more than two billion logged-in users worldwide, as the Google-owned video platform tries to cash in on the booming popularity of short-form videos on social media apps.",
   cat:"HomeLatest"
},
{
    id:63,    
    heading:"Hyderabad: 2-decker marvel in Metro-3",
   image:"https://static.toiimg.com/thumb/msid-102343762,imgsize-63920,width-400,resizemode-4/102343762.jpg",
   description:"In a major decision, the State government has decided to extend the metro rail services in all the directions, beyond the Greater Hyderabad Municipal Corporation limits, in some cases, with an estimated cost of ₹60,000 crore in the coming years.",
   cat:"HomeLatest"
},
{
    id:64,    
    heading:"Engineering graduates should consider taking up full-time research work",
   image:"https://th-i.thgim.com/public/incoming/fybuew/article67147450.ece/alternates/LANDSCAPE_1200/9727_1_8_2023_20_50_8_1_02BGMVTUKAMAKOTIADDRESS1.JPEG",
   description:"Engineering graduates should consider taking up research as a full-time profession, either as academics or as technology-based entrepreneurs,” Professor, IIT Madras, V. Kamakoti said in Belagavi on Tuesday.",
   cat:"HomeLatest"
},
{
    id:65,    
    heading:"Rupee falls 38 paise to close at 82.60 against U.S. dollar",
   image:"https://th-i.thgim.com/public/incoming/9cpn5r/article67150058.ece/alternates/FREE_1200/PTI8_2_2023_001010005B.jpg",
   description:"The rupee fell 38 paise to settle at 82.60 (provisional) against the U.S. dollar on Wednesday on weak domestic equities and elevated crude prices in international markets.",
   cat:"HomeLatest"
},
{
    id:66,    
    heading:"Inquiry into cheetahs deaths points to natural causes.",
   image:"https://th-i.thgim.com/public/todays-paper/tp-national/t4ylib/article67117696.ece/alternates/LANDSCAPE_1200/TH24-PTI-Radio-%2BGN0BHALQN.4.jpg.jpg",
   description:"The environment ministry and the National Tiger Conservation Authority (NTCA) on Monday informed the Supreme Court that a provisional diagnosis of the deaths of eight cheetahs at Kuno National Park point towards natural causes.",
   cat:"HomeLatest"
},  
{   
    id:67,
    heading:"Google introduces ‘Unknown Tracker Alert’ feature for Android.",
    image:"https://images.indianexpress.com/2023/07/Unknown-Tracker-Google-1.jpg?w=640",
   description:"Earlier this year, Google announced that it was working with Apple on a new safety feature called ‘Unknown Tracker Alerts’ which can notify users about unwanted Bluetooth trackers travelling with them.While Bluetooth trackers like AirTags and Tiles are often used to track or find lost items, many have used them for stalking other people and committing crimes like planned car theft.Available on devices running Android 6 Marshmellow or later, the Unknown Tracker Alerts feature works by sending users a notification if it finds a Bluetooth tracker that does not belong to them is travelling with them.If you want more details, just tap on the notification and you will be able to see the location on a map which shows when the tracker started following them. Users can also reveal the serial number and information of the owner by bringing the tracker near the back of their phone. In case you want to locate the tracker without notifying the owner, use the ‘Play Sound’ option.",
  cat:"HomeLatest"
},
{
    id:68,    
    heading:"New on Amazon Prime Video this week: ‘How to Date Billy Walsh’.",
   image:"https://th-i.thgim.com/public/entertainment/movies/acvu7k/article67150097.ece/alternates/FREE_1200/The%20Lost%20Flowers%20of%20Alice%20Hart%20%282023%29.png",
   description:"Directed by Alex Sanjiv Pillai, How to Date Billy Walsh revolves around Amelia (Charithra Chandran) and Archie (Sebastian Croft) who have been friends since they were children. Archie has always been there for Amelia, fighting her fights and laughing at her jokes, all while keeping his long-standing love for her hidden. Amelia falls completely head over heels for Billy Walsh (Tanner Buchanan), the new American transfer student, just as he gathers the guts to express his love. ",
   cat:"HomeLatest"
},  
{
    id:69,    
    heading:"Ensure battery-operated vehicles are in proper condition for door-to-door waste collection",
   image:"https://th-i.thgim.com/public/todays-paper/tp-national/tp-tamilnadu/cy2j39/article67148229.ece/alternates/LANDSCAPE_1200/%E2%80%98Ensure-battery%2BGJEBIGHPE.3.jpg.jpg",
   description:"Madurai Bench of the Madras High Court on Tuesday sought response of Madurai Corporation officials on a public interest litigation petition seeking a direction to the authorities to ensure that all battery-operated vehicles were in proper condition for door-to-door waste collection. ",
   cat:"HomeLatest"
},  
{
    id:70,    
    heading:"If Stokes texts me again I will delete it’: Moeen Ali again calls retirement after 5th Ashes Test",
   image:"https://th-i.thgim.com/public/incoming/8b4jt6/article67145159.ece/alternates/LANDSCAPE_1200/2023-07-31T162616Z_1541354120_UP1EJ7V19NPIP_RTRMADP_3_CRICKET-TEST-ENG-AUS.JPG",
   description:"Moeen, 36, quit test cricket two years ago but was recalled to the squad in June after Jack Leach was injured following a text from captain Ben Stokes, playing four of the five matches in the series.",
   cat:"HomeLatest"
},  
{
    id:71,    
    heading:"BHEL despatches components for supercritical thermal power plant",
   image:"https://www.bhel.com/sites/default/files/logo_0.png",
   description:"Bharat Heavy Electricals Limited, Tiruchi, on Monday dispatched a consignment of boiler components comprising main columns for the 2 X 660 MW supercritical thermal power plant of NTPC’s Talcher Thermal Power Project-Stage-III in Angul district of Odisha.",
   cat:"HomeLatest"
},  
{
    id:72,    
    heading:"Trump charged in U.S. in efforts to overturn 2020 election",
   image:"https://th-i.thgim.com/public/incoming/ofpf39/article67148056.ece/alternates/LANDSCAPE_1200/2023-08-01T220228Z_1161598775_RC2BD2AZFM4J_RTRMADP_3_USA-TRUMP-INVESTIGATIONS.JPG",
   description:"Former U.S president Donald Trump on Tuesday, August 1, 2023 was hit with criminal charges for a third time in four months - this time arising from efforts to overturn his 2020 U.S. election defeat - as he campaigns to regain the presidency next year.",
   cat:"HomeLatest"
},  
    
{
    id:73,    
    heading:"INDIA will come to power at Centre with 300 seats, says Chinta Mohan",
   image:"https://th-i.thgim.com/public/incoming/msnq5/article67146535.ece/alternates/LANDSCAPE_1200/vjkvg-chintha%20%281%29.JPG",
   description:"Former union minister and Congress Working Committee (CWC) member Chinta Mohan predicted that Indian National Developmental Inclusive Alliance (INDIA) will come to power at the Centre with 300 seats. He said that Prime Minister Narendra Modi has failed on all fronts and the fall of BJP has already started and the party will get confined to 150 seats in the general elections that would be held next year.",
   cat:"HomeLatest"
},  
{
    id:74,    
    heading:"Most of the unclaimed bodies in Manipur are of infiltrators: government tells Supreme Court",
   image:"https://th-i.thgim.com/public/incoming/gdtbfr/article67147847.ece/alternates/LANDSCAPE_1200/India_Ethnic_Violence_80991.jpg",
   description:"Solicitor-General Tushar Mehta, appearing for both the Union and Manipur governments, on August 1 told the Supreme Court that “most of the unclaimed bodies are of infiltrators”.",
   cat:"HomeLatest"
},  
// {
//     id:75,    
//     heading:"Samsung Galaxy Z Flip5 steals the show with larger Flex Window, while Tab S9 can scribble under water.",
//    image:"https://images.indianexpress.com/2023/07/Samsung-galaxy-20230726.jpg?w=640",
//    description:"Samsung refreshed its foldable flagship smartphones Wednesday, announcing a major hardware upgrade for the budget version even as design improvements have helped it make the devices thinner when folded. At its first Unpacked Event in Seoul, the Korean tech giant showcased a thinner Galaxy Z Fold5, a Galaxy Z Flip5 with a larger Flex Window screen on the front, new Galaxy Tab S9 series that can work even underwater and a Galaxy Watch6 series with better health features.Samsung refreshed its foldable flagship smartphones Wednesday, announcing a major hardware upgrade for the budget version even as design improvements have helped it make the devices thinner when folded. At its first Unpacked Event in Seoul, the Korean tech giant showcased a thinner Galaxy Z Fold5, a Galaxy Z Flip5 with a larger Flex Window screen on the front, new Galaxy Tab S9 series that can work even underwater and a Galaxy Watch6 series with better health features.",
// cat:"HomeLatest"
// },
// {
//     id:76,    
//     heading:"Portronics launches Beem 410, a portable Android powered projector    ",
//    image:"https://images.indianexpress.com/2023/08/Beem-410.jpg?w=640",
//    description:"Portronics today launched a new portable Android-powered projector called ‘Beem 410’. The smart projector offers a theatre-like experience on the go and works with any white surface or wall.",
//    cat:"HomeLatest"
// },
      

        


])
    return(
        <Store.Provider value={[data,setData]}>
            {props.children}
            {/* <Bollywood/> */}
            {/* <Fitness/> */}
           
        </Store.Provider>
    )
}
export default DataStore;
