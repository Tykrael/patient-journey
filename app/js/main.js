
var patient = {

	template: function(){
	slides = [
		{
			"slide":3,
			"phase":"diagnosis",
			"groupe":1,
			"theme":"insight",
			"titre":"Burden of Diabetes is increasing all over the world, with a real challenge of diagnosis in ermeging countries",
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
			"description":'<p><strong>Need for reassurance and a sense of normality.</strong><br> The diagnosis stage can be a <strong>very traumatic experience</strong>, as the disease may have already settled in and people suffer more serious symptoms. They are distressed and confused, guilty and / or ashamed of having diabetes. </p><p>Clear but detailed information is needed. <br>With the various levels of pre-acquired knowledge and <strong>myths about diabetes</strong>, no detail can be seen as superfluous. <strong>The simple explanations</strong> of what makes the blood sugar go up and down, reasons for hypoglycaemic episodes,  implications on other organs etc.. <strong>are key</strong>. </p><p>Access to information in various platforms that can be read or viewed in patients’ own time, once the shock has passed but also for questions one feels too embarrassed to ask. <br>The conversation with HCPs is recollected to be very short and not comprehensive. </p><p>Diabetes is a trial and error journey -  <strong>Patients and caregivers can sometimes feel they receive conflicting information</strong>.</p>',
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
				"bulle1": "I thought <strong>diabetes was going to kill me fast</strong> and I  was quite stressed about it.",
				"bulle2": "<strong>I was in shock</strong>. Why does it happen to me? I felt stupid and scared and I did not ask anything much.",
				"bulle3": "It was a <strong>blessing in disguise</strong>, since then I have lost weight and adopted a healthier lifestyle",
				"bulle4": "They should have had literature and maybe a video available to take home to look at calmly…",
				"bulle5":  '“It was <strong>hard to accept that I will have this disease the rest life of my life</strong>"',
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
				"bulle1": '<strong> Distance</strong> :<br> “Firstly my doctor is based out of the city and visits his clinic twice in a month”' ,
				"bulle2": '<strong> Doctors availability</strong><br>“It is very difficult most of the time as there is a large number of people at all times to see the doctor.”',
				"bulle3" : '<strong>Waiting at the doctors</strong><br>“I face difficulty in taking time out since my doctor is very busy and I have to wait for quite some time at the clinic…”',
				"bulle4": '<strong>Time constraints from work and home</strong><br> “Work pressure prevents me from going there often.”',
				"bulle5": '<strong> Lack of trust</strong><br>“I don’t visit the doctor that often because [I think] their aim is not to help the patient, but create profit in their business',
			},
			"img":"sanofi.image.4",
			"vignette":" Key barriers with HCP",
		},
		{
			"slide":1,
			"phase":"diagnosis",
			"groupe":3,
			"theme":"sanofi answers",
			"titre":"Sanofi is committed to increase awareness of Diabetes",
			"stitre":null,
			"description":{
				"bulle1":'Diabetes Awareness and Screening campaign across Intercontinental to promote  healthy lifestyles and disease information',
				"bulle2":'In Egypt, since 2010, <strong>Control Diabetes before it controls you</strong>',
				"bulle3":' School campaign to explain challenges of type1 diabetes and promote healthy lifestyle in <strong>Turkey (Diabetes at school), India (Kids)</strong>, Algeria  ...',
				"bulle4":' In India, <strong>What Step Will You Take Today</strong> to fight against Diabetes ',
				"bulle5":'<strong>Screening in South Africa</strong>, 10,000 patients tested.', 
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
			"description":'<p>"A friend of mine who was diagnosed with diabetes hasn\'t got married as he fears he will have to die soon. He has to lost all ambition and is depressed "</p><p><strong>Top 10 myths about Diabetes disease</strong> : <br>- All diabetes is inherited.<br>- The best way to judge your blood sugar level is by the way that you feel.<br>- Insulin causes impotence.<br>- There are no natural remedies for diabetes.<br>- People with diabetes should never eat sugar and sweets.<br>- Once you start taking pills or insulin, you can eat anything that you want.<br>- You can have borderline diabetes for many years.<br>- If my blood sugar is usually over 10mmol/L, that must be normal for me.<br>- Type 2 diabetes is not serious.<br>- It’s a good idea to soak your feet every day if you have diabetes.</p>',
			"img":"sanofi.image.6",
			"vignette":"Secret Diagnosis",
		},
		{
			"slide":2,
			"phase":"diagnosis",
			"groupe":4,
			"theme":"recurrent lifestyle",
			"titre":"Physical exercise, one of the main concern for people with Diabetes ",
			"stitre":null,
			"description":"<p><strong>Importance of the family support and being encouraged</strong>. <br>And Simplicity of it to be part of a daily normal routine. Many cite examples of family walks post meal instead of intense gruelling gym exercises </p><p><strong>Fear of complications act as a good reminder and motivator for diabetes care</strong>. <br>Continue to promote the virtue of exercising with causality links to complications if not followed.</p><p><strong>Importance of the role model</strong>, especially <strong>sports celebrities</strong> and other inspiring public figures.  <br>Continue to leverage those examples in patient support information (e.g. South African Comic booklet) . <br>In cultures, where diabetes is still a bit taboo and something to feel ashamed of. </p>",
			"img":"sanofi.image.7",
			"vignette":"Physical exercise for better diabetes management",
		},
		{
			"slide":3,
			"phase":"diagnosis",
			"groupe":4,
			"theme":"sanofi answers",
			"titre":"Sanofi South Africa is providing patient education material. That meet patient expectation.",
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
			"vignette":"DMPS : level of glycemic control",
		},
		{
			"slide":1,
			"phase":"Time to Treat",
			"groupe":5,
			"theme":"recurrent blood",
			"titre":"Explore and understand the use of blood glucose meter",
			"stitre":null,
			"description":{
				"bulle1": '“Take action by taking medicine” ',
				"bulle2": '“I feel sad for few minutes then resume my normal life. I try to control a little my diet behavior but <strong>there is no consistency</strong>”',
				"bulle3": '“I feel sad for few minutes then resume my normal life. I try to control a little my diet behavior but <strong>there is no consistency</strong>”',
				"bulle4": '“I <strong>write it down in a little note book</strong> that I keep with the monitor” ',
				"bulle5": '“Caregivers are not happy with <strong>fluctuations</strong> in blood sugar and <strong>usually attribute to meter</strong>”'
			},
			"img":"sanofi.image.10",
			"vignette":"Understand the use of blood glucose meter",
		},
		{
			"slide":2,
			"phase":"Time to Treat",
			"groupe":6,
			"theme":"insight",
			"titre":"Compliance issue",
			"stitre":null,
			"description":'“It’s <strong>becoming boring</strong> after some time to take medicine all the time.”"I feel sometimes <strong>lazy</strong> to take my medicine""I ask myself why this happened to me  so much <strong>this disease can affect me everyday</strong>""It\'s like there is <strong>no solution, no improvement of my disease</strong>, i feel alone with my medicine"',
			"img":"sanofi.image.11",
			"vignette":"Compliance issue",
		},
		{
			"slide":2,
			"phase":"Time to Treat",
			"groupe":6,
			"theme":"recurrent lifestyle",
			"titre":"Food, one of the main concern for people with Diabetes",
			"stitre":null,
			"description":"<p><strong>Food is an integral part of their lives</strong>, not knowing what to eat or avoid adds a lot of pressure and deprive them from that sense of normality they long for.  <br>Social outings are challenging and caregivers find it a challenge to be compliant. (Festivals, Ramadans)</p><p>Collaborate with nutritionists to provide localised dietary tips. Help patients and caregivers with <strong>customised Do’s and Don’ts of local food</strong>. <br>Provide clarification on labels but also detailed list of vegetables and fruit. Provide tips on meal plans for working and mobile employees.</p><p><strong>Food and Drugs</strong>:<br> Provide simple explanations  on food that can be eaten in conjunction with their drugs or insulin intake, and post blood sugar reading. <br>Patients and caregivers are still unclear about the impact of diet with drugs.</p><p>\"Almost all diabetics including me, forget their Diabetes when they see sweets. This has to be changed because eating sweets is a big threat to good Diabetes management\" IN, Diabetes and Physicians, Male.</p>",
			"img":"sanofi.image.12",
			"vignette":"Food, prominence in patients' lives",
		},
		{
			"slide":1,
			"phase":"Time to Treat",
			"groupe":6,
			"theme":"sanofi answers",
			"titre":"South Africa MyStar Care SMS program - Sanofi program to facilitate insulin sta",
			"stitre":null,
			"description":{
				"bulle1": "South Africa MyStar Care SMS program - Sanofi program to facilitate insulin sta",
				"bulle2": "<strong>Emotional support</strong><br>Feel better looked after, safer and more confident about their treatment",
				"bulle3": "<strong>Improved diabetes management</strong><br>Helps to build and entices to follow a correct diabetes management routine",
				"bulle4": "<strong>Early detection of complications</strong><br>Constant monitoring allows diabetes educator to flag potential complications at early stage",
				"bulle5": "<strong>Portability</strong><br>The SMS format allows patients to keep on track to the program on-the-go",
			},
			"img":"sanofi.image.13",
			"vignette":"South Africa  MyStar Care SMS program",
		},
		{
			"slide":1,
			"phase":"Time to Treat",
			"groupe":7,
			"theme":"recurrent relationship",
			"titre":"Nurse support is higly appreciated",
			"stitre":null,
			"description":{
				"bulle1": '"Friendly, <strong>dedicated and attended</strong> to the patient with utmost care" M.S. UAE, T2D"',
				"bulle2": '"She had <strong>time, patience and expereince</strong> that most of the doctors lacked" D.P, Turkey, T2D',
				"bulle3": "<strong>Improved diabetes management</strong><br>Helps to build and entices to follow a correct diabetes management routine",
				"bulle4": '"I think there <strong>must be specialised</strong> nurses for Diabetes" R.K, India, T2D',
				"bulle5": '"I find that most nurses <strong>don\'t know enough about diabetes</strong> to be able to assist patients" R.M.V, SA, T2D',
			},
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
			"description":null,
			"img":"sanofi.image.15",
			"vignette":"Going through hypos are worrying and confusing moments",
		},
		{
			"slide":1,
			"phase":"Time to Insulin",
			"groupe":9,
			"theme":"insight",
			"titre":'Fear of injection  - Fear of Insulin - "The one thing I have hoped never to be on.”',
			"stitre":null,
			"description":{
				"bulle1": ' …<strong>It’s painful</strong><br>"One has to live with pricking insulin into the body which is painful “Not nice having to inject all the time',
				"bulle2": ' …<strong> it gives addiction risks / no way back</strong><br>“if diabetes take insulin, it will become regular, and not able to control diabetes without insulin”',
				"bulle3": ' …<strong>it’s fatal</strong><br>“you’re going to die” “life is horrible”',
				"bulle4": ' …<strong>But it also gives better control</strong><br>“it is quite common in these days and also quite essential to control the abnormality in sugar level”',
				"bulle5": ' …<strong>and it can be easy to use</strong><br>“It is easy to take the shot and that I have nothing to feel bad about.”',
			},
			"img":"sanofi.image.16",
			"vignette":"Fear of injection  - Fear of Insulin ",
		},
		{
			"slide":2,
			"phase":"Time to Insulin",
			"groupe":10,
			"theme":"insight",
			"titre":"Compliance issue",
			"stitre":null,
			"description":'<p>“When we go somewhere it can be a pain to remember to firstly take the pen (and medication) with and to administer during whatever...and secondly to keep the insulin cool on seriously hot days when you travel somewhere (e.g.. weddings/parties etc.)”</p><p>"I do not like injections (with the pens it is better). The fact that if you go anywhere you either need to take your insulin with you or return around the time you normally inject so taking insulin sometimes "interferes" with your lifestyle and adaptation has it\'s own difficulties" L.H, Male Patient T2D, RSA</p>',
			"img":"sanofi.image.17",
			"vignette":" Compliance issue",
		},
		{
			"slide":3,
			"phase":"Time to Insulin",
			"groupe":11,
			"theme":"insight",
			"titre":"The level of glycemic control is not optimal in people with diabetes",
			"stitre":null,
			"description":null,
			"img":"sanofi.image.18",
			"vignette":"IDMPS : level of glycemic control",
		},
		{
			"slide":2,
			"phase":"Time to Insulin",
			"groupe":11,
			"theme":"recurrent lifestyle",
			"titre":"Insulin has changed my life ",
			"stitre":null,
			"description":'<p>Interest in innovative devices such as the AllStar reusable pen. Key benefits perceived of Improve usability, portability, cost efficiency are confirmed. <br>It is also important to consider ecological benefits which may resonate more strongly in countries where  such issues are still very close to their daily lives.</p><p>“Taking insulin is not that difficult. With the help of new pen devices, now insulin can be taken easily and accurately without pain.<br>Insulin is the best way to control diabetes”</p>',
			"img":"sanofi.image.19",
			"vignette":"New step in the diabetic's life",
		},
		{
			"slide":3,
			"phase":"Time to Insulin",
			"groupe":11,
			"theme":"sanofi answers",
			"titre":"Patients want to feel normal and in control, needing discreet and ‘part of their everyday live’ devices",
			"stitre":null,
			"description":'<p>“Seeing the AllStar demo made me feel in complete control of my insulin usage. It made me feel confident and in charge. I was happy that such innovative products are being designed for diabetics around the world.”</p><p>Devices that provide a feeling of control, also boost the confidence needed for diabetes management.</p><p><strong>AllStar reusable pen is an innovative product which answers those needs</strong>.</p><p><strong>Accross Intercontinental, a lot of patients are unfortunnaly still using syringues</strong>.</p>',
			"img":"sanofi.image.20",
			"vignette":"AllStar : Device, part of their everyday live",
		},
		{
			"slide":3,
			"phase":"Time to Insulin",
			"groupe":12,
			"theme":"insight",
			"titre":"IDMPS : Education… helps people with diabetes better reach their targets and avoid complications",
			"stitre":null,
			"description":null,
			"img":"sanofi.image.21",
			"vignette":"IDMPS - Education",
		},
		{
			"slide":3,
			"phase":"Time to Insulin",
			"groupe":12,
			"theme":"sanofi answers",
			"titre":"Patient Support Programs to help people with Diabetes their first isnulin experience -More than 200 000 patients supported in the Region ",
			"stitre":null,
			"description":null,
			"img":"sanofi.image.22",
			"vignette":"PSP to support patients at initiation",
		},
		{
			"slide":3,
			"phase":"Time to Insulin",
			"groupe":13,
			"theme":"insight",
			"titre":"As a progressive disease, diabetes has a serious  impact on heath ",
			"stitre":null,
			"description":null,
			"img":"sanofi.image.23",
			"vignette":"As a progressive disease, diabetes has a serious  impact on heath",
		},
		{
			"slide":3,
			"phase":"Time to Insulin",
			"groupe":13,
			"theme":"recurrent hypos",
			"titre":"Delving deeper in to members’ experiences with Hypoglycaemia",
			"sous-titre":null,
			"description":{
				"bulle1": "The idea of a coma makes the experience feel life-threatening",
				"bulle2": "A feeling of being ‘frantic’ when looking for a solution",
				"bulle3": "A recurring feeling of being rock bottom",
				"bulle4": "Fear of the time it will take to go away, and fear of it happening again",
				"bulle5": "Many feel as though they have let themselves down"
			},
			"img":"sanofi.image.24",
			"vignette":"Deeply into Hypoglycaemia",
		},
		{
			"slide":1,
			"phase":"Time to Insulin",
			"groupe":13,
			"theme":"sanofi answers",
			"titre":"Our PSP Programs",
			"sous-titre":null,
			"description":{
				"bulle1": "In Lebanon, <strong>Starcare</strong> supports patient with diabetes since 2011",
				"bulle2": "<strong>Diabeduc in Algeria</strong> propose to patient with Diabetes and their HCP a large education platform since 2010",
				"bulle3": "Starting 2006, <strong>Saath 7</strong> provide adapted program for patients newly insulinazed.",
				"bulle4": "Just started in South Africa, <strong>MyStar Care</strong> will provide disease education and emotional support",
				"bulle5": "<strong>DiaStar in Egypt</strong>, and many others programs in Iran, Pakistan, Bangladesh,...are supporting patients using our insulin."
			},
			"img":"sanofi.image.25",
			"vignette":"Our PSP Programs",
		},
		{
			"slide":3,
			"phase":"intensification",
			"groupe":14,
			"theme":"insight",
			"titre":"IDMPS  :Fear of complication & link with tight control ",
			"sous-titre":null,
			"description":"",
			"img":"sanofi.image.26",
			"vignette":"IDMPS  :Fear of complication & link with tight control ",
		},
		{
			"slide":3,
			"phase":"intensification",
			"groupe":14,
			"theme":"recurrent blood",
			"titre":"Achieving target HbA1c <7%* is a key goal in the management of diabetes ",
			"sous-titre":null,
			"description":"",
			"img":"sanofi.image.27",
			"vignette":"Target HbA1c <7%* is key ",
		},
		{
			"slide":2,
			"phase":"intensification",
			"groupe":15,
			"theme":"recurrent social",
			"titre":"Leveraging social media to promote peer to peer exchange ",
			"sous-titre":null,
			"description":'<p><strong>Facebook Ukraine</strong> : <br>Interactive animated application, which can be used by parents to entertain and teach their children on healthy lifestyle. </p><p><strong>DME Education</strong> : <br>Sponsorship of first diabetes Arabic website  <a href="http://www.dmeducation.com">www.dmediaction.com</a><br>Since 2007:  5.1 million viewers from all over the Middle-East </p><p><strong>Get in Touch</strong> : <br>Private Online Community of people with diabetes (type 1 & 2) and caregivers across the region. <br>Community in English of 250 members, Resources available 24/7-365 for any ITC members, Using different tools (Chat, surveys, forums, brainstorms ….)</p>',
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
			"groupe":16,
			"theme":"recurrent blood",
			"titre":"Discover the ideal glucometer from Get in Touch Community",
			"sous-titre":null,
			"description":{
				"bulle1": ' “Design of Ideal Glucometer, it should of pen size or bit larger”',
				"bulle2": '“Compact size, Colors, Minimum drop of blood, In built blood strip & needle, Memory of readings, <strong>USB connection</strong>, Convenient & easy to use”  ',
				"bulle3": '“should have an <strong>in-built micro SD memory card</strong> to store data, It should also have a strip which doesn’t have to be changed”',
				"bulle4": '“My Glucometer <strong>without strips</strong> - carry on key ring”',
				"bulle5": '“Glucometer Design - A <strong>Wristwatch</strong> come multipurpose and intelligent Glucometer”'
			},
			"img":"sanofi.image.30",
			"vignette":"Ideal Glucometer",
		},/*LAAA*/
		{
			"slide":2,
			"phase":"intensification",
			"groupe":16,
			"theme":"sanofi answers",
			"titre":"Preventive health leaflets initiative Pakistan",
			"sous-titre":null,
			"description":'<p>Keep your eyes healthy leaflet<br>Keep your feet healthy leaflet<br>Keep your kidneys healthy leaflet <br>Keep your nervous system healthy </p><p>The leaflets received a very good response from both the Patients and Caregivers of Get in Touch, with most agreeing that the <strong>leaflets were clear and informative</strong>. <br>Many learnt something new, especially with the leaflets on kidneys, heart and nervous system.</p><p>Some patients found the leaflets in general particularly useful as some were not aware or in full understanding of the <strong>need to take care of their eyes, feet, teeth or the need to monitor symptoms for internal organs failure</strong> (kidneys, heart and nervous system).</p>',
			"img":"sanofi.image.31",
			"vignette":" Preventive health leaflets initiative Pakistan",
		},
		{
			"slide":3,
			"phase":"intensification",
			"groupe":17,
			"theme":"insight",
			"titre":"Diabetes at work ",
			"sous-titre":null,
			"description":"",
			"img":"sanofi.image.32",
			"vignette":"Diabetes at work ",
		},
		{
			"slide":3,
			"phase":"intensification",
			"groupe":17,
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
			"groupe":18,
			"theme":"insight",
			"titre":"Meet the Ambassadors of Middle East region : Committed for increasing awareness and fighting for better lifestyle",
			"sous-titre":null,
			"description":{
				"bulle1": '“I call for a law for diabetics’ rights” G.T, Lebanon',
				"bulle2": '“I’m a normal person with sweet blood” D.S, KSA',
				"bulle3": '"BE ACTIVE, you can fight anything with sports - H.R, Jordan"',
				"bulle4": '“I’m a normal person with sweet blood” D.S, KSA',
				"bulle5": ' “I was a teenager who struggled, I’m going to help others to surpass the struggle” M.A.S Qatar'
			},
			"img":"sanofi.image.34",
			"vignette":"Diabetics Ambassadors",
		},
		{
			"slide":1,
			"phase":"Empowerment",
			"groupe":18,
			"theme":"recurrent lifestyle",
			"titre":"Overview of daily work routine for people with Diabetes",
			"sous-titre":null,
			"description":{
				"bulle1": '<strong>MORNING</strong><br>"I’ll wake up early, have breakfast at home, take my medications and drive my car to work"',
				"bulle2": '<strong>LUNCH</strong><br>"Today I’m eating with my colleagues. I’ll have some meat, carbs and vegetables. Sometimes I don’t have time because of meetings "',
				"bulle3": '<strong>MEDICATIONS</strong><br>"Usually I just need to take medications once during working hours. Most of the times I need some privacy, but sometimes I’ll just take it at my desk"',
				"bulle4": ' <strong>EVENING</strong><br>"After work I’m going to buy some groceries and maybe do some shopping. Also, I won’t forget to take my medications."',
				"bulle5": ' <strong>DINNER</strong><br>"Tonight I’m going to have a nice dinner with my family or partner. We’re having some meat or fish, vegetables and carbs."'
			},
			"img":"sanofi.image.35",
			"vignette":"Overview of daily work routine for people with Diabetes",
		},
		{
			"slide":1,
			"phase":"Empowerment",
			"groupe":19,
			"theme":"recurrent hypos",
			"titre":"Incidents of People with Diabetes’ in their journey ",
			"sous-titre":null,
			"description":{
						"bulle1": '<strong>Ashamed of shaking</strong> and being looked at"',
						"bulle2": '“I know I am <strong>responsible</strong>  for the incident, by either eating or drinking the wrong thing, or <strong>not taking my meds properly</strong>.”',
						"bulle3": '“I was at work and was unaware it was a hypo. I was taking an interview and <strong>collapsed in the sick room</strong>. I was given glucose to eat by the campus doctor… It was really horrible…” ',
						"bulle4": '<strong>“People do not understand such an incident</strong>. You may appear to be intoxicated and they would rather point fingers than help or try to understand..”',
						"bulle5": '<strong>“I had a hypo at work</strong>. I was in a state of confusion with just enough brain power to know I needed glucose. I ate some sweets from my pocket on the way there.”'
					},
			"img":"sanofi.image.36",
			"vignette":"Incidents of People with Diabetes’ in their journey",
		},
		{
			"slide":1,
			"phase":"Empowerment",
			"groupe":20,
			"theme":"recurrent hypos",
			"titre":"What's keep me going ",
			"sous-titre":null,
			"description":{
				"bulle1": '<strong>Fear of Complications</strong><br> : “My greatest fear is loosing my eyesight because I love reading! This just motivates me to keep on managing my diabetes.”',
				"bulle2": '<strong>My Family</strong><br> :  “My kids. They are full of energy. Their spirit of life make me enthusiastic for life. I want to be healthy to live with them. To see them achieving new heights in life. They are my true motivator”',
				"bulle3": '<strong>The feeling of control</strong><br> : “The thought that diabetes is not a disease and that it can be controlled by proper food, medication and daily exercise.”',
				"bulle4": '"I was lazy the previous month and not following my daily schedule in a disciplined manner. Now that I have started doing my daily exercise, proper diet and medication. I feel enthusiastic these days."',
				"bulle5": '<strong>Inspiring public figure</strong><br> : “[The] well known cricketer Wasim Akram who was able to play cricket while he had diabetes. He should be your role model and inspiration.”',
			},
			"img":"sanofi.image.37",
			"vignette":"What's keep me going",
		},
		{
			"slide":1,
			"phase":"Empowerment",
			"groupe":21,
			"theme":"recurrent social",
			"titre":"Appreciating the Peer to Peer support",
			"sous-titre":null,
			"description":{
				"bulle1": 'A <strong>successful support story</strong> – a spontaneous group between diabetic friends in South Africa ',
				"bulle2": '“Hearing the experiences of others confirm that <strong>we are not in this alone</strong>.”',
				"bulle3": '“It’s fun and responsible way of dealing with diabetes, we make fun of each other and sometimes their helpless situations. For valentines’ day our group has been temporarily named as "<strong>Love wont kill, but sugar can Happy Vday</strong>.”',
				"bulle4": '"<strong>Diabetes is an ‘every day’ fight</strong>. It\'s important to communicate that diabetes can be managed and it\'s not necessarily fatal"',
				"bulle5": '“I battle with finding adequate care for my diabetes every day. I am hoping to find someone in this country that will give me honest and straight forward answers.”',
			},
			"img":"sanofi.image.38",
			"vignette":"Appreciating the Peer to Peer support",
		},
		{
			"slide":2,
			"phase":"Empowerment",
			"groupe":21,
			"theme":"sanofi answers",
			"titre":"I am a champ initiative - Celebrating Diabetes Control",
			"stitre":null,
			"description":'<p>In India, this award recognize <strong>patient champions</strong>, who managed to control their diabetes successfully; through a blend of medicine compliance, necessary lifestyle changes in diet and exercise; and most importantly, a positive attitude. </p><p>Patients are nominated by their physician and judged by a Celebrity Jury; 7 National Champs are selected out of the 42 states and are leading FACE & VOICE of diabetes control. </p<p><strong>This unique initiative has a huge impact on others patients, doctors,media,public & employees</strong>. </p<p>Peer to peer support is strongly recognized by all people with Diabetes.</p>',
			"img":"sanofi.image.39",
			"vignette":"I am a champ initiative",
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
						'<figure class="iBlock vTop size1of3 txtCenter"><img src="img/sanofi.image/<%= data.img %>.png"/></figure>'+
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
			calculateHeight:false,
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
					$('.next').fadeOut(300)
				}else{
					$('.next').fadeIn(300)
				}

				if(contentSwiper.activeIndex != 0 ){
					$('.prev').fadeIn(300)
				}else{
					$('.prev').fadeOut(300)
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
		
		
	//$popinInfo.css('min-height', $('.swiper-content .swiper-slide').outerHeight())		
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
			var target = $(e.currentTarget).data('slide-map')
			console.log(target)
		
			$popinMap.stop(true,true).animate({
				opacity:0
			}, function(){
				$(this).addClass('away')
				contentSwiper.swipeTo(target)
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
