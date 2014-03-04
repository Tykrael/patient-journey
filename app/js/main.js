
var patient = {

	template: function(){
		slides = [
		{
			"slide":3,
			"phase":"diagnosis",
			"groupe":1,
			"theme":"insight",
			"titre":"Burden of Diabetes is increasing all over the world, with a real challenge of diagnosis in ermeging countries world",
			"stitre":null,
			"description":null,
			"img":"sanofi.image.1",
			"vignette":" Case of undiagnosed diabetes in 2013 ",
		},
		{
			"slide":2,
			"phase":"diagnosis",
			"groupe":2,
			"theme":"insight",
			"titre":"What people feel and need at time of diagnosis ?",
			"stitre":null,
			"description":"Need for reassurance and a sense of normality. The diagnosis stage can be a very traumatic experience, as the disease may have already settled in and people suffer more serious symptoms or hypos. They are distressed and confused, guilty and / or ashamed of having diabetes. Clear but detailed information is needed. With the various levels of pre-acquired knowledge and myths about diabetes, no detail can be seen as superfluous. The simple explanations of what makes the blood sugar go up and down, reasons for hypoglycaemic episodes,  implications on other organs etc.. are key. Access to information in various platforms that can be read or viewed in patients’ own time, once the shock has passed but also for questions one feels too embarrassed to ask. The conversation with HCPs is recollected to be very short and not comprehensive. Diabetes is a trial and error journey -  Patients and caregivers can sometimes feel they receive conflicting information",
			"img":"sanofi.image.2",
			"vignette":" Key insights at diagnosis",
		},
		{
			"slide":1,
			"phase":"diagnosis",
			"groupe":3,
			"theme":"insight",
			"titre":"When I was first diagnosis",
			"stitre":null,
			"description":{
				"bulle1": "I thought diabetes was going to kill me fast and I  was quite stressed about it.",
				"bulle2": "I was in shock. Why does it happen to me? I felt stupid and scared and I did not ask anything much.",
				"bulle3": "It was a blessing in disguise, since then I have lost weight and adopted a healthier lifestyle",
				"bulle4": "They should have had literature and maybe a video available to take home to look at calmly...",
				"bulle5":  "It was hard to accept that I will have this disease the rest life of my life",
			},
			"img":"sanofi.image.3",
			"vignette":" First diagnosis",
		},
		{
			"slide":1,
			"phase":"diagnosis",
			"groupe":3,
			"theme":"recurrent relationship",
			"titre":"Key barriers to visiting the doctor more regularly from a patient perspective",
			"stitre":null,
			"description":{
				"bulle1": "Waiting at the doctors I face difficulty in taking time out since my doctor is very busy and I have to wait for quite some time at the clinic…",
				"bulle2": "Doctors availability It is very difficult most of the time as there is a large number of people at all times to see the doctor.",
				"bulle3" : "Distance : Firstly my doctor is based out of the city and visits his clinic twice in a month",
				"bulle4": "Time constraints from work and home  Work pressure prevents me from going there often.",
				"bulle5": "Lack of trust I don’t visit the doctor that often because [I think] their aim is not to help the patient, but create profit in their business.",
			},
			"img":"sanofi.image.4",
			"vignette":" Key barriers with HCP",
		},
		{
			"slide":1,
			"phase":"diagnosis",
			"groupe":3,
			"theme":"sanofi answers",
			"titre":"Partnership  with authorities for Awareness",
			"stitre":null,
			"description":{
				"bulle1":" Diabetes Awareness and Screening campaign across Intercontinental to promote  healthy lifestyles and disease information",
				"bulle2":" In Egypt, since 2010, Control Diabetes before it controls you",
				"bulle3":"School campaign to explain challenges of type1 diabetes and promote healthy lifestyle in Turkey (Diabetes at school), India (Kids), Algeria  ...",
				"bulle4":" In India, What Step Will You Take Today' to fight against Diabetes",
				"bulle5": "Diabécole", 
			},
			"img":"sanofi.image.5",
			"vignette":"Increase Diabetes Awareness",
		},
		{
			"slide":2,
			"phase":"diagnosis",
			"groupe":4,
			"theme":"insight",
			"titre":"Keep secret the diagnosis",
			"stitre":null,
			"description":"A friend of mine who was diagnosed with diabetes hasn't got married as he fears he will have to die soon. He has to lost all ambition and is depressed",
			"img":"sanofi.image.6",
			"vignette":"Secret Diagnosis",
		},
		{
			"slide":2,
			"phase":"diagnosis",
			"groupe":4,
			"theme":"recurrent lifestyle",
			"titre":"Understand motivations to adopt physical exercise regime for better diabetes management  ",
			"stitre":null,
			"description":"Importance of the family support and being encouraged . And Simplicity of it to be part of a daily normal routine Many cite examples of family walks post meal instead of intense gruelling gym exercises Fear of complications act as a good reminder and motivator for diabetes care. Continue to promote the virtue of exercising with causality links to complications if not followed.Importance of the role model, especially sports celebrities  and other inspiring public figures. Continue to leverage those examples in patient support information (e.g. South African Comic booklet)  In cultures, where diabetes is still a bit taboo and something to feel ashamed of. ",
			"img":"sanofi.image.7",
			"vignette":"Physical exercise for better diabetes management",
		},
		{
			"slide":3,
			"phase":"diagnosis",
			"groupe":4,
			"theme":"sanofi answers",
			"titre":"South African PSP Initiative",
			"stitre":null,
			"description":null,
			"img":"sanofi.image.8",
			"vignette":"Awareness from our countries",
		},
		{
			"slide":3,
			"phase":"Time to Treat",
			"groupe":5,
			"theme":"insight",
			"titre":"The level of glycemic control is not optimal in people with diabetes",
			"stitre":null,
			"description":null,
			"img":"sanofi.image.9",
			"vignette":"IDMPS : level of glycemic control",
		},
		{
			"slide":1,
			"phase":"Time to Treat",
			"groupe":5,
			"theme":"recurrent blood",
			"titre":"Discover the ideal glucometer from Get in Touch Community",
			"stitre":null,
			"description":{
				"bulle1": "Compact size, Colors, Minimum drop of blood, In built blood strip & needle, Memory of readings, USB connection, Convenient & easy to use",
				"bulle2": "Design of Ideal Glucometer, it should of pen size or bit larger",
				"bulle3": "My Glucometer without strips - carry on key ring",
				"bulle4": "should have an in-built micro SD memory card to store data, It should also have a strip which doesn’t have to be changed",
				"bulle5":  "Glucometer Design - A Wristwatch come multipurpose and intelligent Glucometer"
			},
			"img":"sanofi.image.10",
			"vignette":"Ideal Glucometer",
		},
		{
			"slide":2,
			"phase":"Time to Treat",
			"groupe":6,
			"theme":"insight",
			"titre":"Compliance issue",
			"stitre":null,
			"description":"It’s becoming boring after some time to take medicine all the time.",
			"img":"sanofi.image.11",
			"vignette":"Compliance issue",
		},
		{
			"slide":2,
			"phase":"Time to Treat",
			"groupe":6,
			"theme":"recurrent lifestyle",
			"titre":"Understand the prominence of food in patients’ lives and PSP materials ",
			"stitre":null,
			"description":"Food is an integral part of their lives, not knowing what to eat or avoid adds a lot of pressure and deprive them from that sense of normality they long for.  Social outings are challenging and caregivers find it a challenge to be compliant.Collaborate with nutritionists to provide localised dietary tips. Help patients and caregivers with customised Do’s and Don’ts of local food. Provide clarification on labels but also detailed list of vegetables and fruit. Provide tips on meal plans for working and mobile employees.Food and Drugs: Provide simple explanations  on food that can be eaten in conjunction with their drugs or insulin intake, and post blood sugar reading. Patients and caregivers are still unclear about the impact of diet with drugs. \"Provide a meal plan to keep a balanced diet and tips and feedback about the exercise schedule\" S.E., Type 2, SA, Male",
			"img":"sanofi.image.12",
			"vignette":"Food, prominence in patients' lives",
		},
		{
			"slide":1,
			"phase":"Time to Treat",
			"groupe":6,
			"theme":"sanofi answers",
			"titre":"South Africa Proficio SMS program",
			"stitre":null,
			"description":{
				"bulle1": "Detailed and thorough informationProvides all the knowledge necessary for best diabetes management and correct insulin usage ",
				"bulle2": "Emotional supportPatients feel better looked after, safer and more confident about their treatment",
				"bulle3": "Improved diabetes managementHelps to build and entices to follow a correct diabetes management routine",
				"bulle4": "Early detection of complicationsConstant monitoring allows diabetes educator to flag potential complications at early stage",
				"bulle5": "PortabilityThe SMS format allows patients to keep on track to the program on-the-go",
			},
			"img":"sanofi.image.13",
			"vignette":"South Africa Proficio SMS program",
		},
		{
			"slide":3,
			"phase":"Time to Treat",
			"groupe":7,
			"theme":"recurrent relationship",
			"titre":"The relationship for patients with a Nurse",
			"stitre":null,
			"description":"",
			"img":"sanofi.image.14",
			"vignette":"The relationship for patients with a Nurse",
		},
		{
			"slide":3,
			"phase":"Time to Treat",
			"groupe":8,
			"theme":"recurrent hypos",
			"titre":"Going through hypos are worrying and confusing moments",
			"stitre":null,
			"description":"",
			"img":"sanofi.image.15",
			"vignette":" Going through hypos are worrying and confusing moments",
		},
		{
			"slide":3,
			"phase":"Time to Insulin",
			"groupe":9,
			"theme":"insight",
			"titre":"The level of glycemic control is not optimal in people with diabetes",
			"stitre":null,
			"description":"",
			"img":"sanofi.image.16",
			"vignette":"IDMPS : level of glycemic control",
		},
		{
			"slide":2,
			"phase":"Time to Insulin",
			"groupe":10,
			"theme":"insight",
			"titre":"Compliance issue",
			"stitre":null,
			"description":"When we go somewhere it can be a pain to remember to firstly take the pen (and medication) with and to administer during whatever...and secondly to keep the insulin cool on seriously hot days when you travel somewhere (e.g.. weddings/parties etc.)",
			"img":"sanofi.image.17",
			"vignette":" Compliance issue",
		},
		{
			"slide":2,
			"phase":"Time to Insulin",
			"groupe":10,
			"theme":"recurrent lifestyle",
			"titre":"A new device Diabetes journey ",
			"stitre":null,
			"description":"Interest in innovative devices such as the AllStar reusable pen. Key benefits perceived of Improve usability, portability, cost efficiency are confirmed. It is also important to consider ecological benefits which may resonate more strongly in countries where  such issues are still very close to their daily lives.Taking insulin is not that difficult. With the help of new pen devices, now insulin can be taken easily and accurately without pain. Insulin is the best way to control diabetes",
			"img":"sanofi.image.18",
			"vignette":"New step in the diabetic's life",
		},
		{
			"slide":2,
			"phase":"Time to Insulin",
			"groupe":10,
			"theme":"sanofi answers",
			"titre":"Patients want to feel normal and in control, needing discreet and ‘part of their everyday live’ devices",
			"stitre":null,
			"description":"Seeing the AllStar demo made me feel in complete control of my insulin usage. It made me feel confident and in charge. I was happy that such innovative products are being designed for diabetics around the world.Devices that provide a feeling of control, also boost the confidence needed for diabetes management.AllStar reusable pen is an innovative product which answers those needs",
			"img":"sanofi.image.19",
			"vignette":"AllStar : Device, part of their everyday live",
		},
		{
			"slide":3,
			"phase":"Time to Insulin",
			"groupe":11,
			"theme":"insight",
			"titre":"IDMPS : Education… helps people with diabetes better reach their targets and avoid complications",
			"stitre":null,
			"description":"",
			"img":"sanofi.image.20",
			"vignette":"IDMPS - Education",
		},
		{
			"slide":3,
			"phase":"Time to Insulin",
			"groupe":11,
			"theme":"sanofi answers",
			"titre":"PSP to support patients at initiation  - 200 000 patients supported in the Region ",
			"stitre":null,
			"description":"",
			"img":"sanofi.image.21",
			"vignette":"PSP to support patients at initiation",
		},
		{
			"slide":2,
			"phase":"Time to Insulin",
			"groupe":12,
			"theme":"insight",
			"titre":"Fear of injection  - Fear of Insulin ",
			"stitre":null,
			"description":"I truly hate needles! It may be thin and relatively short but when I have to do it myself, I press the point of the needle against my skin and then deliberately push it in as deep as it will go and press the 'plunger'. It is never pleasant and sometimes I will have distinct bruising. When my wife does it (most times) I do not feel it so keenly as she jabs it and it only 'hurts' and sometimes bleeds once in a while.Reassuring messaging on insulin is key as well as showcasing success stories and prevention on side effects. The injection is also associated with drug addiction. However once on insulin, many experience the positive impact on their day to day life.",
			"img":"sanofi.image.22",
			"vignette":"Fear of injection  - Fear of Insulin ",
		},
		{
			"slide":2,
			"phase":"Time to Insulin",
			"groupe":12,
			"theme":"sanofi answers",
			"titre":"Our PSP Programs",
			"stitre":null,
			"description":"Saath 7 in India :Sanofi India’s ‘Saath7’ is the longest and largest serving patient support programme exclusively for diabetic patients. ‘Saath7’ is a complimentary counseling service offered to patients on Lantus®, on behalf of and with the consent of the treating physician.  65 well trained counselors servicing patients in 33 cities. across India Saath 7 counselors offer home visits, telecounseling, educational material, consultations, and other resources to teach patients and families how to cope and adapt to the lifestyle that is often dictated by their illness.Diabeduc in Algeria : In full collaboration with scientific board (SADIAB), Sanofi has developed :Network of Nurses trained for patients education and certified Education platform for patients to support at time of insulinization for T1D and T2D Diabetes .A call center available to register patients to the program and answer questions on diabetes and/or sanofi insulin disposables  Full logistic support to run this program towards patients and their treated physicians. Futur plan is to go digital with MyStar SolutionMiddle-East :A Closed on-line Community for people living with Diabetes in the RegionCommunity Led by Patient AmbassadorsCommunity endorsed by leading diabetes associations in the MEManaged by Third Party VendorThe My Diabetes Story online community answers the unmet need for patients’ and families of diabetics to communicate with one another",
			"img":"sanofi.image.23",
			"vignette":"Our PSP Programs",
		},
		{
			"slide":3,
			"phase":"intensification",
			"groupe":13,
			"theme":"insight",
			"titre":"IDMPS  :Fear of complication & link with tight control ",
			"sous-titre":null,
			"description":"",
			"img":"sanofi.image.24",
			"vignette":"IDMPS  :Fear of complication & link with tight control ",
		},
		{
			"slide":1,
			"phase":"intensification",
			"groupe":13,
			"theme":"recurrent hypos",
			"titre":"Delving deeper in to members’ experiences with Hypoglycaemia",
			"sous-titre":null,
			"description":{
				"bulle1": "The idea of a coma makes the experience feel life-threatening",
				"bulle2": "A feeling of being ‘frantic’ when looking for a solution",
				"bulle3": "A recurring feeling of being rock bottom",
				"bulle4": "Fear of the time it will take to go away, and fear of it happening again",
				"bulle5": " Many feel as though they have let themselves down"
			},
			"img":"sanofi.image.25",
			"vignette":"Deeply into Hypoglycaemia",
		},
		{
			"slide":3,
			"phase":"intensification",
			"groupe":14,
			"theme":"recurrent blood",
			"titre":"Achieving target HbA1c <7%* is a key goal in the management of diabetes",
			"sous-titre":null,
			"description":"",
			"img":"sanofi.image.26",
			"vignette":"Target HbA1c <7%* is key ",
		},
		{
			"slide":3,
			"phase":"intensification",
			"groupe":15,
			"theme":"",
			"titre":"BGM as part of my routine  my compas my companion ",
			"sous-titre":null,
			"description":"",
			"img":"sanofi.image.27",
			"vignette":"",
		},
		{
			"slide":2,
			"phase":"intensification",
			"groupe":15,
			"theme":"recurrent social",
			"titre":"Leveraging social media to promote peer to peer exchange ",
			"sous-titre":null,
			"description":"Facebook Ukraine : Interactive animated application, which can be used by parents to entertain and teach their children on healthy lifestyle. DME Education : Sponsorship of first diabetes Arabic website  www.dmeducation.com Since 2007:  5.1 million viewers from all over the Middle-East Get in Touch : Private Online Community of people with diabetes (type 1 & 2) and caregivers across the region. Community in English of 250 members, Resources available 24/7-365 for any ITC members, Using different tools (Chat, surveys, forums, brainstorms ….) ",
			"img":"sanofi.image.28",
			"vignette":"Appreciating the Peer to Peer support ",
		},
		{
			"slide":3,
			"phase":"intensification",
			"groupe":16,
			"theme":"insight",
			"titre":"IDMPS : People with diabetes are not reaching the glycemic targets recommended by their physicians",
			"sous-titre":null,
			"description":"",
			"img":"sanofi.image.29",
			"vignette":"IDMPS : People with diabetes are not reaching the glycemic targets recommended by their physicians",
		},
		{
			"slide":3,
			"phase":"intensification",
			"groupe":17,
			"theme":"insight",
			"titre":"As a progressive disease, diabetes has a serious  impact on heath",
			"sous-titre":null,
			"description":"",
			"img":"sanofi.image.30",
			"vignette":"As a progressive disease, diabetes has a serious  impact on heath",
		},
		{
			"slide":2,
			"phase":"intensification",
			"groupe":17,
			"theme":"sanofi answers",
			"titre":"Preventive health leaflets initiative Pakistan",
			"sous-titre":null,
			"description":"Keep your eyes healthy leafletKeep your feet healthy leafletKeep your kidneys healthy leaflet Keep your nervous system healthy The leaflets received a very good response from both the Patients and Caregivers of Get in Touch, with most agreeing that the leaflets were clear and informative. Many learnt something new, especially with the leaflets on kidneys, heart and nervous systemSome patients found the leaflets in general particularly useful as some were not aware or in full understanding of the need to take care of their eyes, feet, teeth or the need to monitor symptoms for internal organs failure (kidneys, heart and nervous system). ",
			"img":"sanofi.image.31",
			"vignette":"Preventive health leaflets initiative Pakistan",
		},
		{
			"slide":3,
			"phase":"intensification",
			"groupe":18,
			"theme":"insight",
			"titre":"Taking medication at work",
			"sous-titre":null,
			"description":"",
			"img":"sanofi.image.32",
			"vignette":"Taking medication at work",
		},
		{
			"slide":3,
			"phase":"intensification",
			"groupe":18,
			"theme":"recurrent relationship",
			"titre":"The ideal relationship for patients with a HCP",
			"sous-titre":null,
			"description":"",
			"img":"sanofi.image.33",
			"vignette":"The ideal relationship for patients with a HCP",
		},
		{
			"slide":1,
			"phase":"Empowerment",
			"groupe":19,
			"theme":"insight",
			"titre":"Meet the Ambassadors of our region",
			"sous-titre":null,
			"description":{
				"bulle1": "'I call for a law for diabetics’ rights' G.T, Lebanon",
				"bulle2": "'I’m a normal person with sweet blood' D.S, KSA",
				"bulle3": "'BE ACTIVE, you can fight anything with sports' H.R,  Jordan",
				"bulle4": "'Insulin, my friend' H.K, Iran",
				"bulle5": "I was a teenager who struggled, I’m going to help others to surpass the struggle M.A.S Qatar"
			},
			"img":"sanofi.image.34",
			"vignette":"Diabetics Ambassadors",
		},
		{
			"slide":2,
			"phase":"Empowerment",
			"groupe":19,
			"theme":"recurrent lifestyle",
			"titre":"What members know about a correct routine",
			"sous-titre":null,
			"description":"Food :Following a schedule of healthy and balanced meals and snacks throughout the day Exercise :Following a regular exercise plan, which should include at least long walks after main mealsMedications : Regularly taking medications every day at the correct timeTesting : Regularly testing blood sugar levels and keeping a log of all readingsHCP visits : Ensuring regular visits to the physician to ensure constant monitoring of the illness",
			"img":"sanofi.image.35",
			"vignette":"What members know about a correct routine",
		},
		{
			"slide":2,
			"phase":"Empowerment",
			"groupe":19,
			"theme":"sanofi answers",
			"titre":"Patient CentricitySupporting thousands of diabetics to live well with diabetes",
			"sous-titre":null,
			"description":"My Diabetes Story' Ambassadors; is a regional communication platform initiated across Middle East countries: KSA, UAE, Qatar, Lebanon, Jordan, Syria, and Iran, that works to drive patient support programs and create awareness about diabetes by engaging an exceptional group of patient ambassadors to drive programs to support patients and their families, and also share their personal experiences to create informative and motivational news stories educating the public and patients’ communities. Sanofi team together with Diabetes Associations identified patients in each country, who have successfully managed their diabetes and are motivated to join the Ambassadors’ group; supporting other patients and engaging in Public communication. Through a strategic communications plan that complements Sanofi’s business objectives, 'My Diabetes Story' Ambassadors are working closely with Sanofi and their respective associations driving  initiatives in their countries to support patients, educate the media and community, while promoting effective disease management and highlight the possibility of leading a fulfilling life with diabetes.My Diabetes Story is in continuous evolution; involving more Ambassadors, Associations, and Countries.",
			"img":"sanofi.image.36",
			"vignette":"Accept to be an Ambassadors ",
		},
		{
			"slide":1,
			"phase":"Empowerment",
			"groupe":20,
			"theme":"recurrent hypos",
			"titre":"Incidents of People with Diabetes’ in their journey ",
			"sous-titre":null,
			"description":{
				"bulle1": "I had a hypo at work. I was in a state of confusion with just enough brain power to know I needed glucose. I ate some sweets from my pocket on the way there.",
				"bulle2": "I know I am responsible for the incident, by either eating or drinking the wrong thing, or not taking my meds properly.",
				"bulle3": "People do not understand such an incident.  You may appear to be intoxicated and they would rather point fingers than help or try to understand..",
				"bulle4":  "I was at work and was unaware it was a hypo. I was taking an interview and collapsed in the sick room. I was given glucose to eat by the campus doctor… It was really horrible…",
				"bulle5":  "Ashamed of shakingand being looked at",
			},
			"img":"sanofi.image.37",
			"vignette":"Incidents of People with Diabetes’ in their journey",
		},
		{
			"slide":1,
			"phase":"Empowerment",
			"groupe":21,
			"theme":"insight",
			"titre":"What's keep me going",
			"sous-titre":null,
			"description":{
				"bulle1": "Fear of Complications : My greatest fear is loosing my eyesight because I love reading! This just motivates me to keep on managing my diabetes.",
				"bulle2": "My Family :  My kids. They are full of energy. Their spirit of life make me enthusiastic for life. I want to be healthy to live with them. To see them achieving new heights in life. They are my true motivator",
				"bulle3": "The feeling of control  : The thought that diabetes is not a disease and that it can be controlled by proper food, medication and daily exercise.",
				"bulle4":  "I was lazy the previous month and not following my daily schedule in a disciplined manner. Now that I have started doing my daily exercise, proper diet and medication. I feel enthusiastic these days.",
				"bulle5":  "Inspiring public figure : [The] well known cricketer Wasim Akram who was able to play cricket while he had diabetes. He should be your role model and inspiration.",
			},
			"img":"sanofi.image.38",
			"vignette":"What's keep me going",
		},
		{
			"slide":1,
			"phase":"Empowerment",
			"groupe":21,
			"theme":"recurrent social",
			"titre":"Appreciating the Peer to Peer support ",
			"stitre":null,
			"description":{
				"bulle1": "Diabetes is an 'every day' fight. It's important to communicate that diabetes can be managed and it's not necessarily fatal",
				"bulle2": "Hearing the experiences of others confirm that we are not in this alone.",
				"bulle3": "I battle with finding adequate care for my diabetes every day. I am hoping to find someone in this country that will give me honest and straight forward answers.",
				"bulle4": "A successful support story – a spontaneous group between diabetic friends in South Africa",
				"bulle5": "It’s fun and responsible way of dealing with diabetes, we make fun of each other and sometimes their helpless situations. For valentines’ day our group has been temporarily named as Love wont kill, but sugar can Happy Vday."
			},
			"img":"sanofi.image.39",
			"vignette":"Appreciating the Peer to Peer support ",
		},
		{
			"slide":2,
			"phase":"Empowerment",
			"groupe":21,
			"theme":"sanofi answers",
			"titre":"I am a champ initiative - Celebrating Diabetes Control",
			"sous-titre":null,
			"description":"The ‘I Am A Champ’ Awards were India’s first ever National Diabetes Awards to recognize patient champions from across India, who managed to control their diabetes successfully; through a blend of medicine compliance, necessary lifestyle changes in diet and exercise; and most importantly, a positive attitude.  The Process: Patients nominated/medical evaluation by their physicians- judged by a Celebrity Jury- Selection of 42 Regional & 7 National Champs- Champs led awareness initiatives as the FACE & VOICE of diabetes control. An overwhelming impact with doctors,patients,media,public & employees because of its patient focus, uniqueness, scale, & engagement; Image building in line with our mission `patient at the centre'",
			"img":"sanofi.image.40",
			"vignette":"I am a champ Indian  initiative",
		}
		];
		 templates = {
		 	content : {
		 		tmp1 :'<li class="swiper-slide tmp1">'+
						'<article class="iBlock size2of3">'+
						'<h3 class="h2"><%= data.titre %></h3>'+
						'<h4 class="h3"><%= data.stitre %></h3>'+
						'<p><%= data.description %></p>'+
						'</article>'+
						'<figure class="iBlock vTop size1of3"><img src="img/sanofi.image/<%= data.img %>.png"/></figure>'+
					'</li>',
				tmp2 : '<li class="swiper-slide tmp2">'+
						'<h3 class="h2"><%= data.titre %></h3>'+	
						'<figure class="rel"><img src="img/sanofi.image/<%= data.img %>.png"/>'+
						'<figcaption><ul class="bubble">'+
							'<li class="bubble-1">'+
								'<div class="text">'+
									'<p><%= data.description.bulle1 %></p>'+
								'</div>'+
							'</li>'+
							'<li class="bubble-2">'+
							'<div class="text">'+
								'<p><%= data.description.bulle2 %></p>'+
								'</div>'+
							'</li>'+
							'<li class="bubble-3">'+
							'<div class="text">'+
								'<p><%= data.description.bulle3 %></p>'+
								'</div>'+
							'</li>'+
							'<li class="bubble-4">'+
							'<div class="text">'+
								'<p><%= data.description.bulle4 %></p>'+
								'</div>'+
							'</li>'+
							'<li class="bubble-5">'+
							'<div class="text">'+
								'<p><%= data.description.bulle5 %></p>'+
								'</div>'+
							'</li>'+
						'</ul></figcaption>'+
						'</figure>'+	
					'</li>',
				tmp3 : '<li class="swiper-slide tmp3">'+
						'<h3 class="h2"><%= data.titre %></h3>'+	
						'<figure class="txtCenter"><img src="img/sanofi.image/<%= data.img %>.png"/></figure>'+
					'</li>'
		 	}, 
		 	nav : {
		 		insight : '<div class="row insight"  data-phase="<%= data.phase %>" data-group="<%= data.groupe %>" data-slide-index="<%= key %>">'+
		 					'<figure class="fleft"><img src="img/sanofi.image/<%= data.img %>.png"/></figure>'+
		 					'<h4><%= data.vignette %></h4>'+
		 					'</div>',
		 		solution : '<div class="row solution" data-phase="<%= data.phase %>" data-group="<%= data.groupe %>" data-slide-index="<%= key %>"><h4><%= data.vignette %></h4></div>',
		 		
		 		recurrentBlood : '<div class="row recurrent blood" data-phase="<%= data.phase %>" data-group="<%= data.groupe %>" data-slide-index="<%= key %>"></div>',
				recurrentSocial : '<div class="row recurrent social" data-phase="<%= data.phase %>" data-group="<%= data.groupe %>" data-slide-index="<%= key %>"></div>',
				recurrentLife: '<div class="row recurrent life" data-phase="<%= data.phase %>" data-group="<%= data.groupe %>" data-slide-index="<%= key %>"></div>',
				recurrentHypos : '<div class="row recurrent hypos" data-phase="<%= data.phase %>" data-group="<%= data.groupe %>" data-slide-index="<%= key %>"></div>',
		 		recurrentRelation : '<div class="row recurrent relation" data-phase="<%= data.phase %>" data-group="<%= data.groupe %>" data-slide-index="<%= key %>"></div>',
		 	}
		 };

		 /*SELECTEUR*/

			 var $swiperContentWrapper = $('.swiper-content .swiper-wrapper'),
				 $swiperNavWrapper = $('.swiper-nav .swiper-wrapper')

		 /*CONTENT SLIDER */
			_.each(slides, function(slide, key){
					switch (slide.slide){
						case 1:
							$swiperContentWrapper.append(_.template(templates.content.tmp2, {data:slide}))
						break;
						case 2:
							$swiperContentWrapper.append(_.template(templates.content.tmp1, {data:slide}))
						break;
						case 3:
							$swiperContentWrapper.append(_.template(templates.content.tmp3, {data:slide}))
						break;
					}
								
				//$swiperContentWrapper.append(_.template(templates.content.tmp1, {data:slide}))
			});
			/*NAV */
		_.each(slides, function(slide, key){
			
			var theme = slide.theme

			switch (theme){
				case 'insight':
					$swiperNavWrapper.append(_.template(templates.nav.insight, {data:slide, key:key}))
				break;
				case 'sanofi answers':
					$swiperNavWrapper.append(_.template(templates.nav.solution, {data:slide, key:key}))
				break;
				case 'recurrent relationship':
					$swiperNavWrapper.append(_.template(templates.nav.recurrentRelation, {data:slide, key:key}))
				break;
				case 'recurrent blood':
					$swiperNavWrapper.append(_.template(templates.nav.recurrentBlood, {data:slide, key:key}))
				break;
				case 'recurrent social':
					$swiperNavWrapper.append(_.template(templates.nav.recurrentSocial, {data:slide, key:key}))
				break;
				case 'recurrent hypos':
					$swiperNavWrapper.append(_.template(templates.nav.recurrentHypos, {data:slide, key:key}))
				break;
				case 'recurrent lifestyle':
					$swiperNavWrapper.append(_.template(templates.nav.recurrentLife, {data:slide, key:key}))
				break;
	
			}
		})

		// Ici je wrap chaque groupe de .row ayant le meme data-group par un <li class="swiper-slide">

		var listGroup = _.toArray(_.indexBy(slides, 'groupe')),
			listGroupLength = listGroup.length

		for (var i = 0; i < listGroupLength; i++) {

			c = i+1	

			$('.row[data-group="'+c+'"]').wrapAll('<li class="swiper-slide">')
		};

		// Ici  j'ajoute la class last au dernier .row  data-phase 

		var listPhase = _.keys(_.indexBy(slides,'phase' )),
			listPhaseLength = listPhase.length

		for (var i = 0; i < listPhaseLength; i++) {

			$('.row[data-phase="'+listPhase[i]+'"]')
				.closest(".swiper-slide")
				.attr('data-phase', listPhase[i])
				.last()
				.closest(".swiper-slide")
				.addClass('last-phase')

			$('.row[data-phase="'+listPhase[i]+'"]')
				.first()
				.closest(".swiper-slide")
				.addClass('first-phase')
		};

		$('.swiper-nav').find('.row').first().addClass('active-nav')
	},

	swiper : function(){

		var $swiperNav = $('.swiper-nav'),
			cssEngine = $('.lt-ie10').length ? false : true

	 	contentSwiper = $('.swiper-content').swiper({
			useCSS3Transforms:cssEngine,
			speed:300,
			calculateHeight:true,
			noSwiping:true,

			onSlideChangeStart: function(contentSwiper){
				
				var activeSlide = contentSwiper.activeIndex
				
				$swiperNav.find('.row').removeClass('active-nav')
				$swiperNav.find('.row[data-slide-index = "'+activeSlide+'"]').addClass('active-nav')

				var visibleSlide = $('.active-nav').data('slide-index', activeSlide).closest('.swiper-slide')
		
				if(!visibleSlide.hasClass('swiper-slide-visible')){

					var navSlide = visibleSlide.index()
					navSwiper.swipeTo(navSlide)
				}

				if(contentSwiper.activeIndex == contentSwiper.slides.length-1 ){
					$('.next').fadeOut()
				}else{
					$('.next').fadeIn()
				}

				if(contentSwiper.activeIndex == 0 ){
					$('.prev').fadeOut()
				}else{
					$('.prev').fadeIn()
				}


			}	
		})

		//Nav
		 navSwiper = $swiperNav.swiper({

			visibilityFullFit: true,
			slidesPerView:'auto',
			useCSS3Transforms:cssEngine,
			resizeReInit:true,
			freeMode:true,
			freeModeFluid:true,

			onFirstInit:function(){
				//console.log(contentSwiper.activeIndex)
				// FIXING TOUT POURRI AU NO SLIDE DU PREMIER ELEMENT
			/*	contentSwiper.swipeTo(1)
				contentSwiper.swipeTo(0)*/
			},

			onTouchStart:function(){
				currentStart = navSwiper.touches.current
			},

			onTouchEnd:function(){

				currentEnd = navSwiper.touches.current

				if(currentStart == currentEnd){
					moved = false
				}else{
					moved = true
				}
			}

		})

		/*CLICK BINDING*/
		$(document).on('click','.swiper-nav .row', function(){

			if(moved == false){

				$swiperNav.find('.row').removeClass('active-nav')

				$(this).addClass('active-nav')
		
				var activeNavIndex = $swiperNav.find('.row.active-nav').attr("data-slide-index")

				contentSwiper.swipeTo(parseInt(activeNavIndex))

				//centering()
			}
		})

		$('.prev').on('click', function(e){
			e.preventDefault()
			contentSwiper.swipePrev()
		})

		$('.next').on('click', function(e){
			e.preventDefault()
			contentSwiper.swipeNext()

		})


	},

	player : function(){
		$(document).on('click', '.player a', function(e){
			e.preventDefault()
			var target = $(e.currentTarget).attr('class')
		
			switch (target){
				case 'back-all':

					contentSwiper.swipeTo(contentSwiper.getFirstSlide().index())
				break;
				case 'prev-phase':
					var activeSlidePhase = $('.row.active-nav').closest('.swiper-slide').data('phase'),
					 	listPhase = _.keys(_.indexBy(slides,'phase')),
					 	prevPhase = listPhase[_.indexOf(listPhase,activeSlidePhase)-1],
					 	firstSlideofPrevPhase = $('.row[data-phase="'+prevPhase+'"]').first().data('slide-index')

					 	if(prevPhase){
					 		contentSwiper.swipeTo(firstSlideofPrevPhase)
					 	}
				break;
				case 'next-phase':

					var activeSlidePhase = $('.row.active-nav').closest('.swiper-slide').data('phase'),
					 	listPhase = _.keys(_.indexBy(slides,'phase')),
					 	nextPhase = listPhase[_.indexOf(listPhase,activeSlidePhase)+1],
					 	firstSlideofNextPhase = $('.row[data-phase="'+nextPhase+'"]').first().data('slide-index')

					 	if(nextPhase){
					 		contentSwiper.swipeTo(firstSlideofNextPhase)
					 	}
				 	
				break;
				case 'next-all':
					contentSwiper.swipeTo(contentSwiper.getLastSlide().index())
				break;
			}

		})

	},

	imgMapResize : function(){
		$('img[usemap]').rwdImageMaps();
	},

	popin: function(){
		var $popinMap = $('.popin-map'),
			$popinInfo = $('.popin-info')
		
		
	$popinInfo.css('min-height', $('.swiper-content .swiper-slide').outerHeight())		
		$('.map-trigger, .info').on('click', function(e){

			e.preventDefault()

			var $opened = $('.modal').not('.away'),
				toOpen = $(e.currentTarget).attr('class')


			switch(toOpen){
				case 'map-trigger':
					var $toOpen = $popinMap
				break;
				case 'info':
					var $toOpen = $popinInfo
				break;
			}

			if($opened.length > 0 ){
			
				$opened.stop(true,true).animate({
					opacity:0
				}, function(){
					$(this).addClass('away')
					if($toOpen.attr('class') != $opened.attr('class')){
						$toOpen.removeClass('away').stop(true,true).animate({
							opacity:1
						})	
					}
	
				})

			}else{
		  		$toOpen.removeClass('away').stop(true,true).animate({
		  			opacity:1
		  		})	
			}
			
		})

		$('#footer').on('click', function(){
			
			if(!$popinInfo.is('.away')){
				$popinInfo.stop(true,true).animate({
					opacity:0
				}, function(){
					$(this).addClass('away')
				})
			}
		})


		$('#Map').find('area').on('click', function(e){
			e.preventDefault()
			var target = $(e.currentTarget).attr('href').split('#')[1]

		
			switch (target){
				case 'diagnosis':
					var slideIndex = $('.first-phase[data-phase='+target+']')
										.find('.row:first')
										.data('slide-index')	
				break;
				case 'timetotreat':
					var slideIndex = $('.first-phase[data-phase='+target+']')
										.find('.row:first')
										.data('slide-index')	
				break;
				case 'timeforinsulin':
					var slideIndex = $('.first-phase[data-phase='+target+']')
										.find('.row:first')
										.data('slide-index')	
				break;
				case 'intensification':
					var slideIndex = $('.first-phase[data-phase='+target+']')
										.find('.row:first')
										.data('slide-index')		
				break;
				case 'empowerment':
					var slideIndex = $('.first-phase[data-phase='+target+']')
										.find('.row:first')
										.data('slide-index')	
				break;
			}
				
			$popinMap.stop(true,true).animate({
				opacity:0
			}, function(){
				$(this).addClass('away')
				contentSwiper.swipeTo(slideIndex)
			})
		})

	},	

	loading : function(){
		$('#loader').fadeOut(800, function(){
			$(this).remove()
		})
	},

	ellipsis: function(){
		$('.swiper-nav .swiper-slide h4').each(function(){

			if($(this).text().length >30){
				var shortText = $(this).text()
								    .substring(0, 35)
								    .split(" ") 
								    .join(" ") + "...";

			 	$(this).text(shortText)  
			}
		})
	},

	initDomReady: function(){
		this.template()	
		this.ellipsis()
	},

	initLoadWindow : function(){
		this.swiper()
		this.imgMapResize()
		this.popin()
		this.player()
		this.loading()
	}
}

$(document).ready(function(){
	patient.initDomReady()
})/*DC END*/

$(window).load(function(){
	patient.initLoadWindow()
})// Window load
