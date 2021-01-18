import speech_recognition as sr
import pyttsx3
import datetime
import time
from PIL import Image
#Speaking
engine = pyttsx3.init('sapi5')
voices = engine.getProperty('voices')
engine.setProperty('voice','voices[0].id')

from flask import Flask, request, render_template
app = Flask(__name__)
# trying flask didnt work
@app.route('/')
def my_form():
    return render_template('bot.html')

@app.route('/', methods=['POST'])
def my_form_post():
    variable = request.form['msg']
    return variable

def speak(text):
    engine.say(text)
    engine.runAndWait() 


# Definition for feeling
def userfel(): 
    speak("How are you feeling today?")
    


 #Good
    #if Feelings == str('Good'):
        #print("I am glad you feel that way " + UsersName + "!")
        #speak("I am glad you feel that way " + UsersName + "!")

    #Bad
    #elif Feelings  == str('Bad'): 
        #print("I am sorry, I hope you feel better  " + UsersName)
        #speak("I am sorry, I hopw you feel better " + UsersName)

    #Tired
    #elif Feelings == str('Tired'):
        #print("I have often heard my coder complaining about feeling tired, hope you feel better. But don't worry, we give our coders enough time for everything " + UsersName)
        #speak("Oh, I'm sorry, I hope you feel better and have a better time ahead " + UsersName + "!")
    
#Main Menu
def mainmenu():
    #Step 1
    time.sleep(3)
    print(
        "What would you like to do, please select the corresponding letters \n" 
        "A. Browse Common Infections/Diseases\n" 
        "B. Make an Appointment with your Insurance Provider\n" 
        "C. Find common Infections/Diseases that match your symptoms\n" 
        "D. Exit \n"
        )
    speak("What would you like to do today? Enter the Capital letter")
    mainmenuInput = input("Please enter it here: ")
    return(mainmenuInput)
    
#Menu Diseases 
def UserDecisionOne():
    speak("Ohh, A very good choice, I will come up with the list you need in a second!")
    time.sleep(2)
    speak("What common diseases and illness would you like to explore with me today?")
    print(
        'What common diseases or illness would you like to explore? \n '
        'A. Chicken Pox\n'
        'B. Common cold \n'
        'C. Diphtheria \n '
        'D. E. coli \n'
        'E. Giardiasis \n'
        'F. HIV/AIDS \n'
        'G. Mono \n'
        'H. Influenza (flu) \n'
        'I. Lyme disease \n'
        'J. Malaria \n'
        'K. Measles \n'
        'L. Meningitis \n'
        'M. Mumps \n'
        'N. Poliomyelitis (polio) \n'
        'O. Pneumonia \n'
        'P. Rocky mountain spotted fever \n'
        'Q. Rubella (German measles) \n'
        'R. Salmonella infections \n'
        'S. Severe acute respiratory syndrome (SARS) \n'
        'T. Tuberculosis \n'
        'U. Whooping cough (pertussis) \n'
        'V. Others (Not listed here) \n'
        'W. EXIT to main \n'
    )
    UserDecisionOne = input('Please enter it here: ')
    return(UserDecisionOne)
    

#Diseases options to choose from 
#for info put a short paragraph+symptoms+medicines or how to get rid
def menuDiseasesOptions(UserDecisionOne = ''):

    if UserDecisionOne == str('A'):
        print("Chicken Pox: Chickenpox is a very contagious viral infection which causes itches, blisters, etc on the human skin. This is very contagious for people who have not had the vaccine or the disease before hand. The most popular symptom is itchy skin, and red bumps all around your body. This is usually self-treatable and highly contagious. It spreads through air, saliva, skin, touching cntaminated surface, and also from mother to babies. About 3.5 million cases per year around the world. For more Information, go to: https://www.mayoclinic.org/diseases-conditions/chickenpox/symptoms-causes/syc-20351282?utm_source=Google&utm_medium=abstract&utm_content=Chickenpox&utm_campaign=Knowledge-panel")

    elif UserDecisionOne == str('B'):
        print("Common Cold: This is a viral infection which impacts the nose and throat, it is usually harmless and can be cured with good body care. In contrast to the flu, a common cold can be caused by many different types of viruses. Symptoms include runny nose, sneexing and congestion. If you also experience severe symptoms that effect your daily activities, it is suggested that you get it checked with a doctor. For more information check out: https://www.mayoclinic.org/diseases-conditions/common-cold/symptoms-causes/syc-20351605")
  
    elif UserDecisionOne == str('C'):
        print("Diptheria: A serious infection of the throat and nose and can be stopped by a vaccine. This is because of a thick and gray matter which covers the back of the throat, making breathing a harder activity than not. Symptoms can include sore throat, fever, swollen lymph nodes, and additional weaknesses. For more information please visit: https://www.mayoclinic.org/diseases-conditions/diphtheria/symptoms-causes/syc-20351897")

    elif UserDecisionOne == str('D'):
        print("E. Coli: 'Most types of E. coli are harmless and even help keep your digestive tract healthy. But some strains can cause diarrhea if you eat contaminated food or drink fouled water... E.Coli Is a type of bacteria that normally lives in your intestines' For more information please visit: https://www.webmd.com/food-recipes/food-poisoning/what-is-e-coli#1 ")

    elif UserDecisionOne == str('E'):
        print("Giardiasis is an infection in your small intestine. It’s caused by a microscopic parasite called Giardia lamblia. Giardiasis spreads through contact with infected people. And you can get giardiasis by eating contaminated food or drinking contaminated water. Pet dogs and cats also frequently contract giardia. For more information please visit: https://www.healthline.com ")

    elif UserDecisionOne == str('F'):
        print("HIV/AIDS: HIV (human immunodeficiency virus) is a virus that attacks cells that help the body fight infection, making a person more vulnerable to other infections and diseases. It is spread by contact with certain bodily fluids of a person with HIV, most commonly during unprotected sex, or through sharing injection drug equipment. For more information please visit: https://www.hiv.gov/hiv-basics/overview/about-hiv-and-aids/what-are-hiv-and-aids") 

    elif UserDecisionOne == str('G'):
        print("Mono: You're most likely to get mononucleosis with all the signs and symptoms if you're a teen or young adult. Young children usually have few symptoms, and the infection often goes undiagnosed. Rest and enough fluids are keys to recovery. Some symptoms include headaches and skin rash. For more information please visit: https://www.mayoclinic.org/diseases-conditions/mononucleosis/symptoms-causes/syc-20350328")

    elif UserDecisionOne == str('H'):
        print("Influenza: Influenza is a viral infection that attacks your respiratory system — your nose, throat and lungs. Influenza is commonly called the flu, but it's not the same as stomach 'flu' viruses that cause diarrhea and vomiting. For most people, the flu resolves on its own. But sometimes, influenza and its complications can be deadly. For more information please visit: https://www.mayoclinic.org/diseases-conditions/flu/symptoms-causes/syc-20351719" )

    elif UserDecisionOne == str('I'):
        print("Lyme disease: " )

    elif UserDecisionOne == str('J'):
        print("Malaria: Malaria is a disease that is cause by a parasite, and is transmitted by mosquitoes bite. The danger of the disease can be based on the species of the parasite. Symptoms that include are fever, chills, sweating, etc. Treatments are antimalarian drugs. For more Information, go to: https://www.mayoclinic.org/diseases-conditions/malaria/symptoms-causes/syc-20351184?utm_source=Google&utm_medium=abstract&utm_content=Malaria&utm_campaign=Knowledge-panel  ")

    elif UserDecisionOne == str('K'):
        print("Measles: Measle is a type of viral infection that is really dangerous for small children. This disease spreads through the air when droplets from lungs produced by coughing or sneezing is passed on. Some symptoms include cough, runny nose, sore throat, skin rashes, fever, inflamed eyes, etc. This can be stopped by vaccines. There is no real treatment to get rid of the disease. Vitamin A might help ease the symptoms. For more information, go to: https://www.mayoclinic.org/diseases-conditions/measles/symptoms-causes/syc-20374857?utm_source=Google&utm_medium=abstract&utm_content=Measles&utm_campaign=Knowledge-panel ")

    elif UserDecisionOne == str('L'):
        print("Meningitis: Meningitis is a disease that inflates the brain and the spinal cord membranes, and this can be caused by an infection. Meningitis is usually viral, but can also be fungal or bacterial in some cases. Some type of meningitis can be stopped with vaccines. Symptoms of this disease include headache, fever, stiff neck, etc. Some type of meningitis can be life threatening. For more information, go to: https://www.google.com/search?sxsrf=ALeKk03WGf7RtuIMx2lpaXc3EqDzln1cuw%3A1610860340425&source=hp&ei=NMcDYInTF7-w0PEPy6WtiA4&q=meningitis&oq=meningitti&gs_lcp=CgZwc3ktYWIQAxgAMgoIABCxAxDJAxAKMgcIABCxAxAKMgQIABAKMgcIABCxAxAKMgcIABCxAxAKMgcIABCxAxAKMgcIABCxAxAKMgQIABAKMgcIABCxAxAKMgQIABAKOgQIIxAnOgQIABBDOgQILhBDOgcIABCxAxBDOgoIABCxAxDJAxBDOgcILhCxAxBDOgUIABCxAzoCCABQ6QJYyBNgsBtoAXAAeACAAXKIAbIHkgEEMTAuMZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab  ")

    elif UserDecisionOne == str('M'):
        print("Mumps: Mumps is a viral infection that really affects the glands of the saliva. it affects the salivary glands under the ear. This disease spreads through saliva that is infected. Some people have no symptoms, but others have swollen, painful, glands, fever, headaches, fatigues, etc. The treatment for this is based on symptom relief. This disease can also be prevented by the MMR vaccine. For more information, go to: https://www.mayoclinic.org/diseases-conditions/mumps/symptoms-causes/syc-20375361?utm_source=Google&utm_medium=abstract&utm_content=Mumps&utm_campaign=Knowledge-panel")

    elif UserDecisionOne == str('N'):
        print("Polio: Polio is a type of virus that causes paralysis. This virus is transitted through contaminated water, food, or contact with a person who is infected. Most of the people do not become sick or experience symptoms. Treatments include bed rest, pain, relievers, etc. For more information, go to: https://www.google.com/search?sxsrf=ALeKk01Tg2e_f5dRmn0-VhvfqP09DR5_lQ%3A1610855196586&ei=HLMDYLqmI-jC0PEPl-uPqAY&q=Polio&oq=Polio&gs_lcp=CgZwc3ktYWIQAzIKCAAQsQMQyQMQQzIFCAAQsQMyBwgAELEDEEMyBwgAELEDEEMyBAgAEEMyBQgAELEDMgUIABCxAzIFCAAQsQMyBwgAELEDEEMyBQgAELEDOgQIABBHOgQIIxAnOggIABCxAxCDAToQCC4QsQMQgwEQxwEQowIQQzoOCC4QsQMQgwEQxwEQowI6CggAELEDEIMBEENQvxtY_yJg0CRoAHADeACAAVyIAaYDkgEBNZgBAKABAaoBB2d3cy13aXrIAQjAAQE&sclient=psy-ab&ved=0ahUKEwi6pJueh6LuAhVoITQIHZf1A2UQ4dUDCA0&uact=5 ")

    elif UserDecisionOne == str('O'):
        print("Pneumonia: Pneumonia is an infection that enlarges/inflames the air sacs of your lungs(either one or both), and the lungs may be filled with fluids or pus too. This infection can be life threatening, especially to infants, children, and for people over the age of 65 years. Symptoms include cough, pus or phelgm, chillsm fever, and also can be difficult to breathe. There are many forms of pneumonia. Some can be treated with a vaccine, and others can be treated with antibiotics such as Macrolides can treat this. For more information, go to: https://www.mayoclinic.org/diseases-conditions/pneumonia/symptoms-causes/syc-20354204#:~:text=Pneumonia%20is%20an%20infection%20that,and%20fungi%2C%20can%20cause%20pneumonia.      " )

    elif UserDecisionOne == str('P'):
        print("Rocky mountain spotted fever: Rocky Mountain Spotted fever is a very infectious disease that is useually in the form of rashes, which is trasmitted by tick bites. It is a fatal disease that is trasmitted through bite of tick which has been infected with rickettsia bacteria. Some symptoms are fever, muscle aches, headaches, and also rashes are present. The rash is blackened or crusted at the tick bite. This can be treated by antibiotics such as Doxycycline. For more information, go to: https://www.cdc.gov/rmsf/index.html" )

    elif UserDecisionOne == str('Q'):
        print("Rubella (German measles): German Measles, or Rubella, is a viral infection that is very contagious, but can be easily prevented by a vaccination. There will be a lot of red rashes in your skin. This disease spreads through direct contact such as saliva, mucus, or can be spread through the air through droplets by coughing and sneezing. Symptoms, that appear after about three weeks, include rashes on your skin, fever, and headache. Rubella is not there in the US anymore. The MMR vaccine prevents the Rubella. For more information, go to: https://www.cdc.gov/rubella/index.html" )

    elif UserDecisionOne == str('R'):
        print("Salmonella infections: Salmonella infection is caused by the Salmonella bacteria, and is commonly cause is by contaminated food and water. This infection is useally common in children, and also people with lower immune system. People with AIDS can also be hugely affected. Some of the symptoms for this virus are diarrhea, abdominal pains, fever, chills, etc. This can be treated by medical professionals and most of the people with this bacteira only need a lot of fluids to recover. Some sever infections may require medical support and antibiotics. Antibiotics include fluoroquinolones(adults only) and azithromycin(for children). For more information, go to: https://www.mayoclinic.org/diseases-conditions/salmonella/symptoms-causes/syc-20355329#:~:text=Salmonella%20infection%20(salmonellosis)%20is%20a,through%20contaminated%20water%20or%20food. " )

    elif UserDecisionOne == str('S'):
        print("Severe acute respiratory syndrome (SARS): SARS, or Sever Acute Respiratory Syndrome is a type of coronavirus. This virus, first appeared in China in 2002, and spread Worldwide within a few months of its start. This type of coronavirus affects the lungs and causes a fatal respiratory illness. This virus is spread when droplets of a person is gone into another person's body. This droplet can be saliva, cough, or a sneeze. There is no transmission of this virus that  has occured since 2004, but still is very dangerous. There is no known cure for this virus, and only intensive support care from hospitals can help. Symptoms include dry cough, fever, muscle aches, headache, and also trouble in breathing. For more information, go to: https://www.who.int/health-topics/severe-acute-respiratory-syndrome#tab=tab_1 " )

    elif UserDecisionOne == str('T'):
        print("Tuberculosis: tuberculosis, a bacteira that can potentially become very dangerous and infectious, affects the lungs mostly. This bacteria is passed on to others when the infected person sneezes or coughs. Most people that have tuberculosis do not have any symptoms, but for the people that do, the symptoms include coughs, fever, coughs that may have blood, night sweats, weight loss, etc. For people not experiencing the symptoms, no treatment is required, or a little bit of antibiotics is required. For people who are experiencing symptoms, a longer course of antibiotics such as Isoniazid, etc. For more information, go to: https://www.mayoclinic.org/diseases-conditions/tuberculosis/symptoms-causes/syc-20351250#:~:text=Tuberculosis%20(TB)%20is%20a%20potentially,air%20via%20coughs%20and%20sneezes." )

    elif UserDecisionOne == str('U'):
        print("Whooping cough (pertussis): Whooping cough is a highly dangerous and infectious respiratory problem/infection. This affects the respiratory tracts. This disease can be prevented with the use of vaccines. This disease is in paticular, dangerous for babies and infants. Symptoms include, nasal congestion, runny nose, sneezes etc. Can be treated from antibiotics and vaccines. Antibiotics such as azithromycin can help prevent the whooping cough. For more information, visit: https://www.health.ny.gov/publications/2171/#:~:text=Antibiotics%20can%20prevent%20and%20treat,sulfamethoxazole%20can%20also%20be%20used." )

    elif UserDecisionOne == str('V'):
        print("Sorry we do not have the disease/illness you want to learn more about in our data base, so we will redirect you to a different website. \n"
     "Please go to https://www.cdc.gov/diseasesconditions/az/c.html for more information"
     )
    elif UserDecisionOne == '':
         print("No such letters in options. Please select the proper letter")
    return() 

    
#Menu Insurance
def menuInsurance():
    speak("Please select the name of your Insurance Provider")
    print("Please select the name of your Insurance Provider (Please select and type in from the options we have \n)"
    "A. Kaiser Permanente\n"
    "B. John Muir Healthcare\n"
    "C. United Healthcare \n"
    "D. Highmark\n"
    "E. Cigna \n"
    "F. Well Care \n"
    "G. Humana \n"
    "H. Exit \n")
    
    UserDecisionTwo = input("Please enter the letter here: ")
    return(UserDecisionTwo)

def MenuInsuranceOption(UserDecisionTwo =''):
    if UserDecisionTwo == str("A"):
        print("Please click https://healthy.kaiserpermanente.org/northern-california/front-door for more information and making an appointment")
    
    elif UserDecisionTwo == str("B"):
        print("Please click https://www.johnmuirhealth.com/doctor for more information and appoint a doctor")
    
    elif UserDecisionTwo == str("C"):
        print("Please click https://www.uhc.com/find-a-physician for more information and to make an appointment")
    
    elif UserDecisionTwo== str("D"):
        print("Please click https://www.highmark.com/#0 for more Information and to make your appointment")
    
    elif UserDecisionTwo == str("E"):
        print("Please click https://hcpdirectory.cigna.com/web/public/consumer/directory for more information and to book an appointment")
    
    elif UserDecisionTwo == str("F"):
        print("Please click https://www.wellcare.com/en/FAP for more information")
    
    elif UserDecisionTwo == str("G"):
        print("Please click https://www.humana.com/finder/medical?customerId=1 for more information and booking an appointment")
    
    elif UserDecisionTwo=='':
        print("Insurance Option is not given, please try again")
    
    return()

#Symptom Search
def Symptoms():
    speak("What Symptoms would you like to browse?")
    print("Which symptoms would you like to browse? Please select from one of the given options\n)"
    "A. Poop is Green\n"
    "B. Coughing Blood\n"
    "C. Sore Throat\n"
    "D. Shortness of Breath\n"
    "E. Diarreah\n"
    "F. Vomitting\n"
    "G. Rashes\n"
    "H. Exit\n"
    )
    UserDecisionThree = input("Please enter the letter here: ")
    return(UserDecisionThree)

def DecisonSymptoms(UserDecisionThree =''):
    if UserDecisionThree == str("A"):
        print("If your poop is green that could mean that you have a stomach virus, or Irritable bowel. Please visit the Mayo Clinic for more information.")
    
    elif UserDecisionThree == str("B"):
        print("If you are coughing up blood this can be a major sign of Cancer, problems with blood vessels and lungs (pnem) or serious infections. For more information please visit www.webmd.com")
    
    elif UserDecisionThree == str("C"):
        print("If you are having a sore throat this could be a very common sign of, a fever, cough, runny nose, body aches, COVID-19, and the common cold. If you are still having a sore throat after a first drink of water in the morning it is suggested that you visit your nearby doctor according to the Mayo Clinic. For more information please visit their website at https://www.mayoclinic.org/diseases-conditions/sore-throat/symptoms-causes/syc-20351635")
    
    elif UserDecisionThree == str("D"):
        print("If you are experiencing a shortness of breath lung conditions such as asthma, emphysema or pneymonia could be a major problem. In addition 'heart disease can make you feel breathless if your heart isn't pumping your blood properly' says Medlineplus. For more information please visit their website at https://medlineplus.gov/breathingproblems.html" )
    
    elif UserDecisionThree == str("E"):
        print("According to Clevland Clinic 'The most common cause of diarrhea is a virus that infects your bowel (“viral gastroenteritis”). The infection usually lasts a couple of days and is sometimes called “intestinal flu.' If you would like some more information please visit their website at https://my.clevelandclinic.org/.")
    
    elif UserDecisionThree == str("F"):
        print("If you are experiencing vomitting some common diseases/infections linked to this could include Heart Attacks, Concussios, Brain Tumor, some forms of cancer and etc. The severity of the vomiting can often decide what the severity of the illness could be. Please visit https://www.webmd.com/digestive-disorders/digestive-diseases-nausea-vomiting#1 for some more information.")
    
    elif UserDecisionThree == str("G"):
        print("First and foremost it is important to remember that rashes can have also have non-underlying diseases related causes. But if it is an unexplained rash some infections/other conditions that could be causing this include chronic medical conditions, allergic reactions, among others. For more information please visit https://www.medicinenet.com/rash/symptoms.htm ")
    
    elif UserDecisionThree =='':
        print("Adios, Amigo!")
    
    return()


#MediHarmony

if __name__ == '__main__':
    #Introduction
        speak("Hi, I will be your virtual Assistant today. What is your name? Please type it in.")
        UsersName = input("Hi I will be your virtual Assistant today what is your name? " )
        print("Hi there, " + UsersName + "!")
        speak("Hi there " + UsersName)
        time.sleep(1)

    
    
        print("While I am constantly learning and developing I would like you too note that we here at Medical Harmony \n"
      "prioritize clear and understanding so if you could please answer the questions in the way requested that would \n"
      "be much appreciated! Thanks for understanding " + UsersName +"!")

        userInput = True

        userfel()
        UserFeeling = input("How are you feeling today?: ")
        print("Thank you for your input and hope you have a great day. ")
        speak("Thank you very much and I hope you have a great day ahead. ")
   
        while(userInput):
            menuInput = mainmenu()
                
            if menuInput == str("A"):
                userSelectedMenuOne=UserDecisionOne()
                time.sleep(1)
                UserOptionOne=menuDiseasesOptions(userSelectedMenuOne)
                time.sleep(4)
                

            elif menuInput == str("B"):
                userSelectedMenuTwo = menuInsurance()
                time.sleep(1)
                userOptiontwo = MenuInsuranceOption(userSelectedMenuTwo)
                time.sleep(2)

            elif menuInput == str("C"):
                userSelectedMenuThree = Symptoms()
                time.sleep(1)
                userOptionthree = DecisionSymptoms(UserDecisionThree)
                time.sleep(2)
                #menuMedicine()
               

            elif menuInput == str("D"):
                userInput = False
                

            else:
                print("Invalid input. Please try again")
        print("Thank you for taking your time to chat with me")
        speak("Thank you for taking your time to chat with me")

