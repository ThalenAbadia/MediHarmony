// Definition for feeling
function bubble() {
    document.getElementById('1').innerHTML = "Welcome, I am MediBot, your personal healthcare companion."
    document.getElementById('1').style.display = "block";
    setTimeout(function(){
    document.getElementById('2').innerHTML = "How are you feeling? <br> <button onclick='good()'>Good</button> <button onclick='bad()'>Bad</button> <button onclick='okay()'>Okay</button>";
    document.getElementById('2').style.display = "block";
    }, 2000);
}
// Good Function
function good() {
    document.getElementById('3').innerHTML = "Good!"
    document.getElementById('3').style.display = "block";
    document.getElementById('4').innerHTML = "I'm glad you feel that way!"
    document.getElementById('4').style.display = "block";
    setTimeout(function(){
    document.getElementById('5').innerHTML = "What would you like to do? <br><button onclick='appoint()'>Make an Appointment with your Insurance Provider</button><button onclick='symptom()'>Find information and symptoms about common Infections/Diseases</button><button onclick='exit()'>Exit</button>";
    document.getElementById('5').style.display = "block";
    }, 2000);
}
// Bad Function
function bad() {
    document.getElementById('3').innerHTML = "Bad :("
    document.getElementById('3').style.display = "block";
    document.getElementById('4').innerHTML = "I am sorry, I hope you feel better."
    document.getElementById('4').style.display = "block";
    setTimeout(function(){
    document.getElementById('5').innerHTML = "What would you like to do? <br><button onclick='appoint()'>Make an Appointment with your Insurance Provider</button><button onclick='symptom()'>Find information and symptoms about common Infections/Diseases</button><button onclick='exit()'>Exit</button>";
    document.getElementById('5').style.display = "block";
    }, 2000);
}
// Okay Function
function okay() {
    document.getElementById('3').innerHTML = "Okay."
    document.getElementById('3').style.display = "block";
    document.getElementById('4').innerHTML = "Hopefully you feel better soon!"
    document.getElementById('4').style.display = "block";
    setTimeout(function(){
    document.getElementById('5').innerHTML = "What would you like to do? <br><button onclick='appoint()'>Make an Appointment with your Insurance Provider</button><button onclick='symptom()'>Find information and symptoms about common Infections/Diseases</button><button onclick='exit()'>Exit</button>";
    document.getElementById('5').style.display = "block";
    }, 2000); 
}

// Insurance Collection
function appoint() {
    document.getElementById('6').innerHTML = "Please select the name of your Insurance Provider <br> <button onclick='kaiser()'>Kaiser Permanente</button><button onclick='john()'>John Muir Healthcare</button><button onclick='united()'>United Healthcare</button><button onclick='high()'>Highmark</button><button onclick='cig()'>Cigna</button><button onclick='well()'>Well Care</button><button onclick='humana()'>Humana</button><button onclick='exit()'>Exit</button>";
    document.getElementById('6').style.display = "block";
}

//different insurrances
//<a href='' target='_blank'>here</a>
//johnmuir
function john() {
    document.getElementById('8').innerHTML = "John Muir";
    document.getElementById('8').style.display = "block";
    document.getElementById('9').innerHTML = "Please click <a href=' https://www.johnmuirhealth.com/doctor' target='_blank'>here</a> for more information and appoint a doctor";
    document.getElementById('9').style.display = "block"; 
}

//United
function united() {
    document.getElementById('8').innerHTML = "United Healthcare";
    document.getElementById('8').style.display = "block";
    document.getElementById('9').innerHTML = "Please click <a href='https://www.uhc.com/find-a-physician' target='_blank'>here</a> for more information and to make an appointment";
    document.getElementById('9').style.display = "block"; 
} 

//Kaiser
function kaiser() {
    document.getElementById('8').innerHTML = "Kaiser Permenente";
    document.getElementById('8').style.display = "block";
    document.getElementById('9').innerHTML = "Please click <a href='https://healthy.kaiserpermanente.org/northern-california/front-door' target='_blank'>here</a> for more information and making an appointment";
    document.getElementById('9').style.display = "block"; 
}

//HighMark
function high() {
    document.getElementById('8').innerHTML = "High Mark";
    document.getElementById('8').style.display = "block";
    document.getElementById('9').innerHTML = "Please click <a href='https://www.highmark.com/#0' target='_blank'>here</a> for more Information and to make your appointment";
    document.getElementById('9').style.display = "block"; 
}

//Cigna
function cig() {
    document.getElementById('8').innerHTML = "Cigna";
    document.getElementById('8').style.display = "block";
    document.getElementById('9').innerHTML = "Please click <a href='https://hcpdirectory.cigna.com/web/public/consumer/directory' target='_blank'>here</a> for more information and to make an appointment";
    document.getElementById('9').style.display = "block"; 
}

//WellCare
function wellc() {
    document.getElementById('8').innerHTML = "Well Care";
    document.getElementById('8').style.display = "block";
    document.getElementById('9').innerHTML = "Please click <a href='https://www.wellcare.com/en/FAP' target='_blank'>here</a> for more information";
    document.getElementById('9').style.display = "block"; 
}

//Humana
function humana() {
    document.getElementById('8').innerHTML = "Humana";
    document.getElementById('8').style.display = "block";
    document.getElementById('9').innerHTML = "Please click <a href='https://www.humana.com/finder/medical?customerId=1' target='_blank'>here</a> for more information and booking an appointment";
    document.getElementById('9').style.display = "block"; 
}


//Common Illness or disease
function symptom() {
    document.getElementById('6').innerHTML = "Great! I will come up with the list you need in a second!";
    document.getElementById('6').style.display = "block";
    setTimeout(function(){
    document.getElementById('7').innerHTML = "What common diseases or illness would you like to explore?<br> <button onclick='chicken()'>Chicken Pox</button><button onclick='cold()'>Common cold</button><button onclick='diph()'>Diphtheria</button><button onclick='coli()'>E.coli</button><button onclick='giar()'>Giardiasis</button><button onclick='hiv()'>HIV/AIDS</button><button onclick='mono()'>Mono</button><button onclick='flu()'>Influenza (flu)</button><button onclick='lyme()'>Lyme disease</button><button onclick='malar()'>Malaria</button><button onclick='meas()'>Measles</button><button onclick='meni()'>Meningitis</button><button onclick='mumps()'>Mumps</button><button onclick='poli()'>Poliomyelitis (polio)</button><button onclick='pneu()'>Pneumonia</button><button onclick='fev()'>Rocky mountain spotted fever</button><button onclick='rube()'>Rubella (German measles)</button><button onclick='salm()'>Salmonella infections</button><button onclick='acute()'>Severe acute respiratory syndrome (SARS)</button><button onclick='tube()'>Tuberculosis</button><button onclick='whoop()'>Whooping cough (pertussis)</button><button onclick='covid()'>COVID-19</button><button onclick='exit()'>EXIT to main</button>";
    document.getElementById('7').style.display = "block";
    }, 2000);
}

//Different illnesses
//<a href='' target='_blank'>here</a>
//common cold
function cold() {
    document.getElementById('8').innerHTML = "Common Cold";
    document.getElementById('8').style.display = "block";
    document.getElementById('9').innerHTML = "Common Cold: This is a viral infection which impacts the nose and throat, it is usually harmless and can be cured with good body care. In contrast to the flu, a common cold can be caused by many different types of viruses. Symptoms include runny nose, sneexing and congestion. If you also experience severe symptoms that effect your daily activities, it is suggested that you get it checked with a doctor. For more information check it out: <a href=' https://www.mayoclinic.org/diseases-conditions/common-cold/symptoms-causes/syc-20351605' target='_blank'>here</a> ";
    document.getElementById('9').style.display = "block";
}

//chicken pox
function chicken() {
    document.getElementById('8').innerHTML = "Chicken Pox";
    document.getElementById('8').style.display = "block"; 
    document.getElementById('9').innerHTML = "Chicken Pox: Chickenpox is a very contagious viral infection which causes itches, blisters, etc on the human skin. This is very contagious for people who have not had the vaccine or the disease before hand. The most popular symptom is itchy skin, and red bumps all around your body. This is usually self-treatable and highly contagious. It spreads through air, saliva, skin, touching cntaminated surface, and also from mother to babies. About 3.5 million cases per year around the world. For more Information, go <a href='https://www.mayoclinic.org/diseases-conditions/chickenpox/symptoms-causes/syc-20351282?utm_source=Google&utm_medium=abstract&utm_content=Chickenpox&utm_campaign=Knowledge-panel' target='_blank'>here</a> ";
    document.getElementById('9').style.display = "block";
}

//diph
function diph() {
    document.getElementById('8').innerHTML = "Diphtheria";
    document.getElementById('8').style.display = "block";  
    document.getElementById('9').innerHTML = "Diptheria: A serious infection of the throat and nose and can be stopped by a vaccine. This is because of a thick and gray matter which covers the back of the throat, making breathing a harder activity than not. Symptoms can include sore throat, fever, swollen lymph nodes, and additional weaknesses. For more information please visit <a href= 'https://www.mayoclinic.org/diseases-conditions/diphtheria/symptoms-causes/syc-20351897'target='_blank'>here</a> ";
    document.getElementById('9').style.display = "block";  
}

//e-coli
function coli() {
    document.getElementById('8').innerHTML = "E.coli";
    document.getElementById('8').style.display = "block";
    document.getElementById('9').innerHTML = "E. Coli: 'Most types of E. coli are harmless and even help keep your digestive tract healthy. But some strains can cause diarrhea if you eat contaminated food or drink fouled water... E.Coli Is a type of bacteria that normally lives in your intestines' For more information please visit: <a href=' https://www.webmd.com/food-recipes/food-poisoning/what-is-e-coli#1 ' target='_blank'>here</a> ";
    document.getElementById('9').style.display = "block";
}
//giar
function giar() {
    document.getElementById('8').innerHTML = "Giardiasis";
    document.getElementById('8').style.display = "block";   
    document.getElementById('9').innerHTML = "Giardiasis is an infection in your small intestine. It’s caused by a microscopic parasite called Giardia lamblia. Giardiasis spreads through contact with infected people. And you can get giardiasis by eating contaminated food or drinking contaminated water. Pet dogs and cats also frequently contract giardia. For more information please visit: <a href='https://www.healthline.com' target='_blank'>here</a> ";
    document.getElementById('9').style.display = "block"; 
}
//hiv-aids
function hiv() {
    document.getElementById('8').innerHTML = "HIV/AIDS";
    document.getElementById('8').style.display = "block";
    document.getElementById('9').innerHTML = "HIV/AIDS: HIV (human immunodeficiency virus) is a virus that attacks cells that help the body fight infection, making a person more vulnerable to other infections and diseases. It is spread by contact with certain bodily fluids of a person with HIV, most commonly during unprotected sex, or through sharing injection drug equipment. For more information please visit: <a href=' https://www.hiv.gov/hiv-basics/overview/about-hiv-and-aids/what-are-hiv-and-aids ' target='_blank'>here</a> ";
    document.getElementById('9').style.display = "block"; 
}
//mono
function mono() {
    document.getElementById('8').innerHTML = "MonoInfluenza";
    document.getElementById('8').style.display = "block";   
    document.getElementById('9').innerHTML = "Mono: You're most likely to get mononucleosis with all the signs and symptoms if you're a teen or young adult. Young children usually have few symptoms, and the infection often goes undiagnosed. Rest and enough fluids are keys to recovery. Some symptoms include headaches and skin rash. For more information please visit:<a href=' https://www.mayoclinic.org/diseases-conditions/mononucleosis/symptoms-causes/syc-20350328 ' target='_blank'>here</a> ";
    document.getElementById('9').style.display = "block"; 
}
//lyme disease
function lyme() {
    document.getElementById('8').innerHTML = "Lyme";
    document.getElementById('8').style.display = "block";
    document.getElementById('9').innerHTML = "Lyme disease: Lyme disease is a illness cause by a tick. Deer ticks are the ticks that carry the bacteria that causes this disease. Syptoms include bulls eye like rashes, flu symptoms, joint pain, weakness in limbs, etc. Treatemnt can include antibiotics such as doxycycline can help get rid of this disease. For more information, go to: <a href=' https://www.mayoclinic.org/diseases-conditions/lyme-disease/symptoms-causes/syc-20374651?utm_source=Google&utm_medium=abstract&utm_content=Lyme-disease&utm_campaign=Knowledge-panel ' target='_blank'>here</a> ";
    document.getElementById('9').style.display = "block"; 
}
//Influenza
function flu() {
    document.getElementById('8').innerHTML = "Influenza";
    document.getElementById('8').style.display = "block";
    document.getElementById('9').innerHTML = "Influenza: Influenza is a viral infection that attacks your respiratory system — your nose, throat and lungs. Influenza is commonly called the flu, but it's not the same as stomach 'flu' viruses that cause diarrhea and vomiting. For most people, the flu resolves on its own. But sometimes, influenza and its complications can be deadly. For more information please visit: <a href='https://www.mayoclinic.org/diseases-conditions/flu/symptoms-causes/syc-20351719 ' target='_blank'>here</a> ";
    document.getElementById('9').style.display = "block"; 
}
//malaria
function malar() {
    document.getElementById('8').innerHTML = "Malaria";
    document.getElementById('8').style.display = "block";
    document.getElementById('9').innerHTML = "Malaria: Malaria is a disease that is cause by a parasite, and is transmitted by mosquitoes bite. The danger of the disease can be based on the species of the parasite. Symptoms that include are fever, chills, sweating, etc. Treatments are antimalarian drugs. For more Information, go to: <a href=' https://www.mayoclinic.org/diseases-conditions/malaria/symptoms-causes/syc-20351184?utm_source=Google&utm_medium=abstract&utm_content=Malaria&utm_campaign=Knowledge-panel  ' target='_blank'>here</a>  ";
    document.getElementById('9').style.display = "block"; 
}
//measles
function meas() {
    document.getElementById('8').innerHTML = "Measles";
    document.getElementById('8').style.display = "block";
    document.getElementById('9').innerHTML = "Measles: Measle is a type of viral infection that is really dangerous for small children. This disease spreads through the air when droplets from lungs produced by coughing or sneezing is passed on. Some symptoms include cough, runny nose, sore throat, skin rashes, fever, inflamed eyes, etc. This can be stopped by vaccines. There is no real treatment to get rid of the disease. Vitamin A might help ease the symptoms. For more information, go to: <a href='https://www.mayoclinic.org/diseases-conditions/measles/symptoms-causes/syc-20374857?utm_source=Google&utm_medium=abstract&utm_content=Measles&utm_campaign=Knowledge-panel  ' target='_blank'>here</a> ";
    document.getElementById('9').style.display = "block"; 
}

function meni() {
    document.getElementById('8').innerHTML = "Meningitis";
    document.getElementById('8').style.display = "block";
    document.getElementById('9').innerHTML = "Meningitis: Meningitis is a disease that inflates the brain and the spinal cord membranes, and this can be caused by an infection. Meningitis is usually viral, but can also be fungal or bacterial in some cases. Some type of meningitis can be stopped with vaccines. Symptoms of this disease include headache, fever, stiff neck, etc. Some type of meningitis can be life threatening. For more information, go to: <a href=' https://www.google.com/search?sxsrf=ALeKk03WGf7RtuIMx2lpaXc3EqDzln1cuw%3A1610860340425&source=hp&ei=NMcDYInTF7-w0PEPy6WtiA4&q=meningitis&oq=meningitti&gs_lcp=CgZwc3ktYWIQAxgAMgoIABCxAxDJAxAKMgcIABCxAxAKMgQIABAKMgcIABCxAxAKMgcIABCxAxAKMgcIABCxAxAKMgcIABCxAxAKMgQIABAKMgcIABCxAxAKMgQIABAKOgQIIxAnOgQIABBDOgQILhBDOgcIABCxAxBDOgoIABCxAxDJAxBDOgcILhCxAxBDOgUIABCxAzoCCABQ6QJYyBNgsBtoAXAAeACAAXKIAbIHkgEEMTAuMZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab' target='_blank'>here</a> ";
    document.getElementById('9').style.display = "block"; 
}

function mumps() {
    document.getElementById('8').innerHTML = "Mumps";
    document.getElementById('8').style.display = "block";
    document.getElementById('9').innerHTML = "Mumps: Mumps is a viral infection that really affects the glands of the saliva. it affects the salivary glands under the ear. This disease spreads through saliva that is infected. Some people have no symptoms, but others have swollen, painful, glands, fever, headaches, fatigues, etc. The treatment for this is based on symptom relief. This disease can also be prevented by the MMR vaccine. For more information, go to: <a href=' https://www.mayoclinic.org/diseases-conditions/mumps/symptoms-causes/syc-20375361?utm_source=Google&utm_medium=abstract&utm_content=Mumps&utm_campaign=Knowledge-panel ' target='_blank'>here</a> ";
    document.getElementById('9').style.display = "block"; 
}
//polio
function poli() {
    document.getElementById('8').innerHTML = "Poliomyelitis";
    document.getElementById('8').style.display = "block";
    document.getElementById('9').innerHTML = "Polio: Polio is a type of virus that causes paralysis. This virus is transitted through contaminated water, food, or contact with a person who is infected. Most of the people do not become sick or experience symptoms. Treatments include bed rest, pain, relievers, etc. For more information, go to: <a href=' https://www.google.com/search?sxsrf=ALeKk01Tg2e_f5dRmn0-VhvfqP09DR5_lQ%3A1610855196586&ei=HLMDYLqmI-jC0PEPl-uPqAY&q=Polio&oq=Polio&gs_lcp=CgZwc3ktYWIQAzIKCAAQsQMQyQMQQzIFCAAQsQMyBwgAELEDEEMyBwgAELEDEEMyBAgAEEMyBQgAELEDMgUIABCxAzIFCAAQsQMyBwgAELEDEEMyBQgAELEDOgQIABBHOgQIIxAnOggIABCxAxCDAToQCC4QsQMQgwEQxwEQowIQQzoOCC4QsQMQgwEQxwEQowI6CggAELEDEIMBEENQvxtY_yJg0CRoAHADeACAAVyIAaYDkgEBNZgBAKABAaoBB2d3cy13aXrIAQjAAQE&sclient=psy-ab&ved=0ahUKEwi6pJueh6LuAhVoITQIHZf1A2UQ4dUDCA0&uact=5 ' target='_blank'>here</a>  ";
    document.getElementById('9').style.display = "block"; 
}
//pneumonia
function pneu() {
    document.getElementById('8').innerHTML = "Pneumonia";
    document.getElementById('8').style.display = "block";
    document.getElementById('9').innerHTML = "Pneumonia: Pneumonia is an infection that enlarges/inflames the air sacs of your lungs(either one or both), and the lungs may be filled with fluids or pus too. This infection can be life threatening, especially to infants, children, and for people over the age of 65 years. Symptoms include cough, pus or phelgm, chillsm fever, and also can be difficult to breathe. There are many forms of pneumonia. Some can be treated with a vaccine, and others can be treated with antibiotics such as Macrolides can treat this. For more information, go to: <a href='https://www.mayoclinic.org/diseases-conditions/pneumonia/symptoms-causes/syc-20354204?utm_source=Google&utm_medium=abstract&utm_content=Pneumonia&utm_campaign=Knowledge-panel' target='_blank'>here</a>";
    document.getElementById('9').style.display = "block"; 
}
//fever
function fev() {
    document.getElementById('8').innerHTML = "Rocky mountain spotted fever";
    document.getElementById('8').style.display = "block";
    document.getElementById('9').innerHTML = "Rocky mountain spotted fever: Rocky Mountain Spotted fever is a very infectious disease that is useually in the form of rashes, which is trasmitted by tick bites. It is a fatal disease that is trasmitted through bite of tick which has been infected with rickettsia bacteria. Some symptoms are fever, muscle aches, headaches, and also rashes are present. The rash is blackened or crusted at the tick bite. This can be treated by antibiotics such as Doxycycline. For more information, go to: <a href='https://www.mayoclinic.org/diseases-conditions/rocky-mountain-spotted-fever/symptoms-causes/syc-20361032?utm_source=Google&utm_medium=abstract&utm_content=Rocky-Mountain-spotted-fever&utm_campaign=Knowledge-panel' target='_blank'>here</a>";
    document.getElementById('9').style.display = "block"; 
}
//rube
function rube() {
    document.getElementById('8').innerHTML = "Rubella (German measles)";
    document.getElementById('8').style.display = "block";
    document.getElementById('9').innerHTML = "Rubella (German measles): German Measles, or Rubella, is a viral infection that is very contagious, but can be easily prevented by a vaccination. There will be a lot of red rashes in your skin. This disease spreads through direct contact such as saliva, mucus, or can be spread through the air through droplets by coughing and sneezing. Symptoms, that appear after about three weeks, include rashes on your skin, fever, and headache. Rubella is not there in the US anymore. The MMR vaccine prevents the Rubella. For more information, go to: <a href='https://www.mayoclinic.org/diseases-conditions/rubella/symptoms-causes/syc-20377310?utm_source=Google&utm_medium=abstract&utm_content=Rubella&utm_campaign=Knowledge-panel' target='_blank'>here</a>";
    document.getElementById('9').style.display = "block"; 
}
//salm
function salm() {
    document.getElementById('8').innerHTML = "Salmonella infections";
    document.getElementById('8').style.display = "block";
    document.getElementById('9').innerHTML = "Salmonella infections: Salmonella infection is caused by the Salmonella bacteria, and is commonly cause is by contaminated food and water. This infection is useally common in children, and also people with lower immune system. People with AIDS can also be hugely affected. Some of the symptoms for this virus are diarrhea, abdominal pains, fever, chills, etc. This can be treated by medical professionals and most of the people with this bacteira only need a lot of fluids to recover. Some sever infections may require medical support and antibiotics. Antibiotics include fluoroquinolones(adults only) and azithromycin(for children). For more information, go to: <a href='https://www.mayoclinic.org/diseases-conditions/salmonella/symptoms-causes/syc-20355329#:~:text=Salmonella%20infection%20(salmonellosis)%20is%20a,through%20contaminated%20water%20or%20food.' target='_blank'>here</a>";
    document.getElementById('9').style.display = "block"; 
}

function acute() {
    document.getElementById('8').innerHTML = "Severe Acute Respiratory Syndrome (SARS)";
    document.getElementById('8').style.display = "block";
    document.getElementById('9').innerHTML = "Severe acute respiratory syndrome (SARS): SARS, or Sever Acute Respiratory Syndrome is a type of coronavirus. This virus, first appeared in China in 2002, and spread Worldwide within a few months of its start. This type of coronavirus affects the lungs and causes a fatal respiratory illness. This virus is spread when droplets of a person is gone into another person's body. This droplet can be saliva, cough, or a sneeze. There is no transmission of this virus that  has occured since 2004, but still is very dangerous. There is no known cure for this virus, and only intensive support care from hospitals can help. Symptoms include dry cough, fever, muscle aches, headache, and also trouble in breathing. For more information, go to: <a href='https://www.mayoclinic.org/diseases-conditions/sars/symptoms-causes/syc-20351765?utm_source=Google&utm_medium=abstract&utm_content=Severe-acute-respiratory-syndrome-(SARS)&utm_campaign=Knowledge-panel' target='_blank'>here</a> ";
    document.getElementById('9').style.display = "block"; 
}
function tube() {
    document.getElementById('8').innerHTML = "Tuberculosis";
    document.getElementById('8').style.display = "block";
    document.getElementById('9').innerHTML = "Tuberculosis: tuberculosis, a bacteira that can potentially become very dangerous and infectious, affects the lungs mostly. This bacteria is passed on to others when the infected person sneezes or coughs. Most people that have tuberculosis do not have any symptoms, but for the people that do, the symptoms include coughs, fever, coughs that may have blood, night sweats, weight loss, etc. For people not experiencing the symptoms, no treatment is required, or a little bit of antibiotics is required. For people who are experiencing symptoms, a longer course of antibiotics such as Isoniazid, etc. For more information, go to: <a href='https://www.mayoclinic.org/diseases-conditions/tuberculosis/symptoms-causes/syc-20351250#:~:text=Tuberculosis%20(TB)%20is%20a%20potentially,air%20via%20coughs%20and%20sneezes' target='_blank'>here</a>.";
    document.getElementById('9').style.display = "block"; 
}
//whooping cough
function whoop() {
    document.getElementById('8').innerHTML = "Whooping cough (pertussis)";
    document.getElementById('8').style.display = "block";
    document.getElementById('9').innerHTML = "Whooping cough (pertussis): Whooping cough is a highly dangerous and infectious respiratory problem/infection. This affects the respiratory tracts. This disease can be prevented with the use of vaccines. This disease is in paticular, dangerous for babies and infants. Symptoms include, nasal congestion, runny nose, sneezes etc. Can be treated from antibiotics and vaccines. Antibiotics such as azithromycin can help prevent the whooping cough. For more information, visit: <a href='https://www.health.ny.gov/publications/2171/#:~:text=Antibiotics%20can%20prevent%20and%20treat,sulfamethoxazole%20can%20also%20be%20used' target='_blank'>here</a>.";
    document.getElementById('9').style.display = "block"; 
}

//covid
function covid() {
    document.getElementById('8').innerHTML = "Coronavirus Disease 2019";
    document.getElementById('8').style.display = "block";
    document.getElementById('9').innerHTML = "COVID-19 is a respitory virus that is mildly dangerous since most cases are mild. The virus damages the cell walls of the Lungs and messes with the Nervous System as well. For more info, visit <a href='https://www.cdc.gov/coronavirus/2019-ncov/index.html' target='_blank'>here</a>";
    document.getElementById('9').style.display = "block"; 
}

//Exits the message by reloading
function exit() {
    location.reload();
}
