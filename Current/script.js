document.addEventListener('DOMContentLoaded', () => {

    const profile = portfolioData.profile;
    const workExperience = portfolioData.workExperience;
    const education = portfolioData.education;
    const services = portfolioData.services;
    const skills = portfolioData.skills;
    const projects = portfolioData.projects;
    const achievements = portfolioData.achievements;
    
    //PROFILE-PAGE
    const bookPage1 = document.createElement('div');
    bookPage1.setAttribute('id', 'page-1'); 

    bookPage1.setAttribute('class', 'book-page page-left');

    const profilePage = document.createElement('div');
    profilePage.setAttribute('class', 'profile-page');
    profilePage.setAttribute('id', 'profile-page');

    const profileImage = document.createElement('img');
    profileImage.setAttribute('id', 'profile-image');
    profileImage.setAttribute('class', 'floating');
    profileImage.setAttribute('alt', 'Profile Image');
    profileImage.src = profile.image;

    const profileName = document.createElement('ul');
    profileName.setAttribute('id', 'profile-name');
    profileName.setAttribute('class', 'name');
    profileName.innerHTML = profile.name.split('').map(letter => 
        `<li class="check">
            <input type="checkbox" />
            <div class="edit">${letter}</div>
        </li>`
    ).join('');
    

    const contenth = document.createElement('div');
    contenth.setAttribute('class', 'contenth');

    const profileRole = document.createElement('h3');
    profileRole.setAttribute('id', 'profile-role');
    profileRole.textContent = profile.role;

    const profileRoleDuplicate = document.createElement('h3');
    profileRoleDuplicate.setAttribute('id', 'profile-role-duplicate');
    profileRoleDuplicate.textContent = profile.role;

    contenth.append(profileRole);
    contenth.append(profileRoleDuplicate);

    const profileSocialMedia = document.createElement('div');
    profileSocialMedia.setAttribute('id', 'profile-social-media');
    profileSocialMedia.setAttribute('class', 'social-media');
    profileSocialMedia.style.marginTop = '10px';
    profileSocialMedia.innerHTML = profile.socialMedia.map(sm => 
        `<a href="${sm.link}"><i class='bx bxl-${sm.platform} bx-flashing'></i></a>`
    ).join('');

    const profileBio = document.createElement('p');
    profileBio.setAttribute('id', 'profile-bio');
    profileBio.textContent = profile.bio;

    const btnBox = document.createElement('div');
    btnBox.setAttribute('class', 'btn-box');
    btnBox.style.marginTop = '12px';

    const profileCvLink = document.createElement('a');
    profileCvLink.setAttribute('id', 'profile-cv-link');
    profileCvLink.setAttribute('class', 'btn');
    profileCvLink.setAttribute('target', '_blank');
    profileCvLink.textContent = 'Open CV';
    profileCvLink.href = profile.cvLink;

    const contactMeLink = document.createElement('a');
    contactMeLink.setAttribute('href', '#');
    contactMeLink.setAttribute('class', 'btn contact-me');
    contactMeLink.textContent = 'Contact Me';
    contactMeLink.setAttribute('id', 'contactMeBtn'); 


    btnBox.append(profileCvLink);
    btnBox.append(contactMeLink);

    profilePage.append(profileImage);
    profilePage.append(profileName);
    profilePage.append(contenth);
    profilePage.append(profileSocialMedia);
    profilePage.append(profileBio);
    profilePage.append(btnBox);

    bookPage1.append(profilePage);
    
    const book = document.querySelector(".book");
    book.append(bookPage1);
   

    // Populate profile data
    // Page 1 & 2
    const bookPage2 = document.createElement('div');
    bookPage2.setAttribute('class', 'book-page page-right turn');
    bookPage2.setAttribute('id','turn-1');
    //WORK
    const work = document.createElement('div');
    work.setAttribute('class', 'page-front');

    const workExperienceHeader = document.createElement('h1');
    workExperienceHeader.setAttribute('class', 'title hover-underline-animation');
    workExperienceHeader.textContent = 'Work Experience'
    
    const works = document.createElement('div');
    works.setAttribute('class','workeduc-box');
    works.setAttribute('id', 'work-experience');
    works.innerHTML = workExperience.map(exp => 
        `<div class="workeduc-content">
            <span class="year"><i class='bx bxs-calendar'></i>${exp.date}</span>
            <h3>${exp.role} - ${exp.company}</h3>
            <ul>${exp.description.map(desc => `<li>${desc}</li>`).join('')}</ul>
        </div>`
    ).join('');
    
    
    const pageno1 = document.createElement('span');
    pageno1.setAttribute('class','number-page');
    pageno1.textContent = '1';

    const next1 = document.createElement('span');
    next1.setAttribute('class','nextprev-btn')
    next1.setAttribute('data-page','turn-1');

    const icon1 = document.createElement('i');
    icon1.setAttribute('class','bx bxs-chevron-right')

    next1.append(icon1);

    work.append(workExperienceHeader);
    work.append(works);
    work.append(pageno1);
    work.append(next1);

    bookPage2.append(work);

    const educationpage = document.createElement('div');
    educationpage.setAttribute('class', 'page-back');

    const educationHeader = document.createElement('h1');
    educationHeader.setAttribute('class', 'title');
    educationHeader.textContent = 'Education';

    const educations = document.createElement('div');
    educations.setAttribute('class','workeduc-box');
    educations.setAttribute('id', 'education');
    educations.innerHTML = education.map(edu => 
        `<div class="workeduc-content">
            <span class="year"><i class='bx bxs-calendar'></i>${edu.date}</span>
            <h3>${edu.institution}</h3>
            <ul>${edu.details.map(detail => `<li>${detail}</li>`).join('')}</ul>
        </div>`
    ).join('');
    

    const pageno2 = document.createElement('span');
    pageno2.setAttribute('class','number-page');
    pageno2.textContent = '2';

    const prev1 = document.createElement('span');
    prev1.setAttribute('class','nextprev-btn back')
    prev1.setAttribute('data-page','turn-1');

    const icon2 = document.createElement('i');
    icon2.setAttribute('class','bx bxs-chevron-left')

    prev1.append(icon2);

    educationpage.append(educationHeader);
    educationpage.append(educations);
    educationpage.append(pageno2);
    educationpage.append(prev1);

    bookPage2.append(educationpage);
    book.append(bookPage2);

    //PAGE 3 & 4 
    const bookPage3and4 = document.createElement('div');
    bookPage3and4.setAttribute('class', 'book-page page-right turn');
    bookPage3and4.setAttribute('id', 'turn-2');
    
    // MY SERVICES
    const myServicesPage = document.createElement('div');
    myServicesPage.setAttribute('class', 'page-front');
    
    const servicesHeader = document.createElement('h1');
    servicesHeader.setAttribute('class', 'title');
    servicesHeader.textContent = 'My Services';
    
    const serviceslist = document.createElement('div');
    serviceslist.setAttribute('class', 'services-box');
    serviceslist.setAttribute('id', 'services');
    serviceslist.innerHTML = services.map(service => 
        `<div class="services-content">
            <i class='bx ${service.icon}'></i>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        </div>`
    ).join('');
    
    
    const pageno3 = document.createElement('span');
    pageno3.setAttribute('class', 'number-page');
    pageno3.textContent = '3';
    
    const next2 = document.createElement('span');
    next2.setAttribute('class', 'nextprev-btn');
    next2.setAttribute('data-page', 'turn-2');
    
    const icon3 = document.createElement('i');
    icon3.setAttribute('class', 'bx bxs-chevron-right');
    
    next2.append(icon3);
    
    myServicesPage.append(servicesHeader);
    myServicesPage.append(serviceslist);
    myServicesPage.append(pageno3);
    myServicesPage.append(next2);
    
    bookPage3and4.append(myServicesPage);
    // MY SKILLS
    const mySkillsPage = document.createElement('div');
    mySkillsPage.setAttribute('class', 'page-back');
    
    const skillsHeader = document.createElement('h1');
    skillsHeader.setAttribute('class', 'title');
    skillsHeader.textContent = 'My Skills';
    
    const skillslist = document.createElement('div');
    skillslist.setAttribute('class', 'skills-box');
    skillslist.setAttribute('id', 'skills');
    skillslist.innerHTML = `
    <div class="skills-content">
        <h3>Front-End</h3>
        <div class="content">
            ${skills.frontend.map(skill => `
                <span><i class='bx ${skill.icon}'></i> ${skill.name}</span>
            `).join('')}
        </div>
    </div>
    <div class="skills-content">
        <h3>Programming Languages</h3>
        <div class="content">
            ${skills.programmingLanguages.map(skill => `
                <span><i class='bx ${skill.icon}'></i> ${skill.name}</span>
            `).join('')}
        </div>
    </div>
    <div class="skills-content">
        <h3>IDE and Tools</h3>
        <div class="content">
            ${skills.tools.map(tool => `
                <span><i class='bx ${tool.icon}'></i> ${tool.name}</span>
            `).join('')}
        </div>
    </div>`;
    
    const pageno4 = document.createElement('span');
    pageno4.setAttribute('class', 'number-page');
    pageno4.textContent = '4';
    
    const prev2 = document.createElement('span');
    prev2.setAttribute('class', 'nextprev-btn back');
    prev2.setAttribute('data-page', 'turn-2');
    
    const icon4 = document.createElement('i');
    icon4.setAttribute('class', 'bx bxs-chevron-left');
    
    prev2.append(icon4);
    
    mySkillsPage.append(skillsHeader);
    mySkillsPage.append(skillslist);
    mySkillsPage.append(pageno4);
    mySkillsPage.append(prev2);
    
    bookPage3and4.append(mySkillsPage);
    
    book.append(bookPage3and4);
    // Populate skills
    //PAGE 5 & 6

    const bookPage5and6 = document.createElement('div');
    bookPage5and6.setAttribute('class', 'book-page page-right turn');
    bookPage5and6.setAttribute('id', 'turn-3');

    // ABOUT MY WORK
    const aboutMyWorkPage = document.createElement('div');
    aboutMyWorkPage.setAttribute('class', 'page-front');

    const aboutWorkHeader = document.createElement('h1');
    aboutWorkHeader.setAttribute('class', 'title');
    aboutWorkHeader.textContent = 'About My Work';

    // Projects Section
    const projectsSection = document.createElement('section');
    projectsSection.setAttribute('class', 'section');

    const projectsHeader = document.createElement('h2');
    projectsHeader.setAttribute('class', 'section-title');
    projectsHeader.textContent = 'Projects';

    const projectslist = document.createElement('div');
    projectslist.setAttribute('id', 'projects');
    projectslist.setAttribute('class', 'section-content');
    projectslist.innerHTML = projects.map(project => `
        <div class="project">
            <h3>${project.title}</h3>
        </div>
    `).join('');
    

    projectsSection.append(projectsHeader);
    projectsSection.append(projectslist);
    // Achievements Section
    const achievementsSection = document.createElement('section');
    achievementsSection.setAttribute('class', 'section');

    const achievementsHeader = document.createElement('h2');
    achievementsHeader.setAttribute('class', 'section-title');
    achievementsHeader.textContent = 'Achievements';

    const achievementslist = document.createElement('div');
    achievementslist.setAttribute('id', 'achievements');
    achievementslist.setAttribute('class', 'section-content');
    achievementslist.innerHTML = achievements.map(achievement => `
        <div class="achievement">
            <h3>${achievement.title}</h3>
        </div>
    `).join('');
    

    achievementsSection.append(achievementsHeader);
    achievementsSection.append(achievementslist);

    const pageno5 = document.createElement('span');
    pageno5.setAttribute('class', 'number-page');
    pageno5.textContent = '5';

    const next3 = document.createElement('span');
    next3.setAttribute('class', 'nextprev-btn');
    next3.setAttribute('data-page', 'turn-3');

    const icon5 = document.createElement('i');
    icon5.setAttribute('class', 'bx bxs-chevron-right');

    next3.append(icon5);

    aboutMyWorkPage.append(aboutWorkHeader);
    aboutMyWorkPage.append(projectsSection);
    aboutMyWorkPage.append(achievementsSection);
    aboutMyWorkPage.append(pageno5);
    aboutMyWorkPage.append(next3);

    bookPage5and6.append(aboutMyWorkPage);
    // CONTACT
    const contactPage = document.createElement('div');
    contactPage.setAttribute('class', 'page-back');

    const contactHeader = document.createElement('h1');
    contactHeader.setAttribute('class', 'title');
    contactHeader.textContent = 'Get in Touch!';

    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('class', 'contact-container');

    const form = document.createElement('form');
    form.setAttribute('action', 'https://api.web3forms.com/submit');
    form.setAttribute('method', 'POST');
    form.setAttribute('class', 'contact-form');
    form.setAttribute('name', 'theform');
    form.setAttribute('id', 'myform');

    const accessKeyInput = document.createElement('input');
    accessKeyInput.setAttribute('type', 'hidden');
    accessKeyInput.setAttribute('name', 'access_key');
    accessKeyInput.setAttribute('value', '63fed3eb-ba39-41ca-af4b-fe289bb9954a');

    const nameInputGroup = document.createElement('div');
    nameInputGroup.setAttribute('class', 'input-group');

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('id', 'fname');
    nameInput.setAttribute('placeholder', 'Full Name');
    nameInput.setAttribute('onkeyup', 'checkform()');
    nameInput.required = true;

    nameInputGroup.append(nameInput);

    const emailInputGroup = document.createElement('div');
    emailInputGroup.setAttribute('class', 'input-group');

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('id', 'femail');
    emailInput.setAttribute('placeholder', 'Email Address');
    emailInput.setAttribute('onkeyup', 'checkform()');
    emailInput.required = true;

    emailInputGroup.append(emailInput);

    const messageInputGroup = document.createElement('div');
    messageInputGroup.setAttribute('class', 'input-group');

    const messageTextarea = document.createElement('textarea');
    messageTextarea.setAttribute('name', 'message');
    messageTextarea.setAttribute('cols', '30');
    messageTextarea.setAttribute('id', 'fmessage');
    messageTextarea.setAttribute('rows', '10');
    messageTextarea.setAttribute('placeholder', 'Your Message');
    messageTextarea.setAttribute('onkeyup', 'checkform()');
    messageTextarea.required = true;
    messageInputGroup.append(messageTextarea);
    const submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('id', 'form-btn');
    submitButton.setAttribute('class', 'btn');
    submitButton.setAttribute('name', 'submit');
    submitButton.setAttribute('value', 'Send Message');
    submitButton.disabled = true;
    form.append(accessKeyInput);
    form.append(nameInputGroup);
    form.append(emailInputGroup);
    form.append(messageInputGroup);
    form.append(submitButton);
    contactContainer.append(form);
    const pageno6 = document.createElement('span');
    pageno6.setAttribute('class', 'number-page');
    pageno6.textContent = '6';
    const prev3 = document.createElement('span');
    prev3.setAttribute('class', 'nextprev-btn back');
    prev3.setAttribute('data-page', 'turn-3');
    const icon6 = document.createElement('i');
    icon6.setAttribute('class', 'bx bxs-chevron-left');
    prev3.append(icon6);
    const backProfileLink = document.createElement('a');
    backProfileLink.setAttribute('href', '#');
    backProfileLink.setAttribute('class', 'back-profile');
    const backProfileText = document.createElement('p');
    backProfileText.textContent = 'Profile';
    const backProfileIcon = document.createElement('i');
    backProfileIcon.setAttribute('class', 'bx bxs-user');
    backProfileLink.append(backProfileText);
    backProfileLink.append(backProfileIcon);
    contactPage.append(contactHeader);
    contactPage.append(contactContainer);
    contactPage.append(pageno6);
    contactPage.append(prev3);
    contactPage.append(backProfileLink);
    bookPage5and6.append(contactPage);
    book.append(bookPage5and6);
});
function checkform()
{
    var take= document.forms['theform'].elements;
    var fieldmustbefilled = true;
    for(var i=0; i<take.length; i++)
        {
            if(take[i].value.length == 0)
                fieldmustbefilled = false;
        }
        if(fieldmustbefilled) 
            {
                document.getElementById("form-btn").disabled =false;
                document.getElementById("form-btn").style.backgroundColor = "#00abf0";
                document.getElementById("form-btn").style.color = "white";
                document.getElementById("form-btn").style.borderColor = "#00abf0";
            }
        else 
        {
            document.getElementById("form-btn").disabled = true;
            document.getElementById("form-btn").style.backgroundColor = "#8E8E8E";
            document.getElementById("form-btn").style.color = "grey";
            document.getElementById("form-btn").style.borderColor = "grey";
        }
}



document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.book-page');
    const pageTurnBtn = document.querySelectorAll('.nextprev-btn');
    
    pageTurnBtn.forEach((el) => {
        el.addEventListener('click', () => {
            const targetPageId = el.getAttribute('data-page');
            const targetPage = document.getElementById(targetPageId);
            
            if (targetPage.classList.contains('turn')) {
                targetPage.classList.remove('turn');
                setTimeout(() => {
                    targetPage.style.zIndex = 20; // Set appropriate zIndex
                }, 500);
            } else {
                targetPage.classList.add('turn');
                setTimeout(() => {
                    targetPage.style.zIndex = 20; // Set appropriate zIndex
                }, 500);
            }
        });
    });
});



// const pageTurnBtn = document.querySelectorAll(".nextprev-btn");
// pageTurnBtn.forEach((el, index) => {
//     el.onclick = () => {
//         const pageTurnId = el.getAttribute("data-page");
//         const pageTurn = document.getElementById(pageTurnId);
//         if (pageTurn.classList.contains("turn")) {
//             pageTurn.classList.remove("turn");
//             setTimeout(() => {
//                 pageTurn.style.zIndex = 20 - index;
//             }, 500);
//         }
//         else {
//             pageTurn.classList.add("turn");
//             setTimeout(() => {
//                 pageTurn.style.zIndex = 20 + index;
//             }, 500);
//         }
//     };
// });


//contact me button when click
document.addEventListener('DOMContentLoaded', () => {
    // Animation for initial pages
    const pages = document.querySelectorAll('.book-page');  
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.remove('turn');
            page.style.zIndex = 10 + index;
        }, (index + 1) * 200 + 2100); // Adjust timing as needed
    });

    // Contact Me button functionality
    const contactMeBtn = document.querySelector('#contactMeBtn');
    if (contactMeBtn) {
        contactMeBtn.addEventListener('click', function() {
            pages.forEach((page, index) => {
                setTimeout(() => {
                    page.classList.add('turn');
                    page.style.zIndex = 20 + index;
                }, (index + 1) * 200 + 100);
            });
        });
    } else {
        console.error('Element with ID "contactMeBtn" not found.');
    }
});

function reverseIndex() {
    pageNumber--
    if (pageNumber < 0) {
        pageNumber = totalPages - 1
    }
}
// back profile button when clicked
document.addEventListener('DOMContentLoaded', () => {
    const backProfileBtn = document.querySelector('.back-profile');
    if (backProfileBtn) {
        backProfileBtn.addEventListener('click', function() {
            const pages = document.querySelectorAll('.book-page');
            let totalPages = pages.length;
            let pageNumber = totalPages - 1;

            pages.forEach((_, index) => {
                setTimeout(() => {
                    pages[pageNumber].classList.remove('turn');

                    setTimeout(() => {
                        pages[pageNumber].style.zIndex = 10 + index;
                    }, 500);
                }, (index + 1) * 200 + 100);
            });

            // Scroll or animate to page 1 (opening page)
            setTimeout(() => {
                const page1 = document.querySelector('#page-1');
                if (page1) {
                    page1.classList.add('turn');
                    page1.style.zIndex = 20; // Adjust zIndex as needed
                } else {
                    console.error('Element with ID "page-1" not found.');
                }
            }, 2000); // Adjust timing as per your animation needs
        });
    } else {
        console.error('Element with class "back-profile" not found.');
    }
});



//opening animation
const coverRight = document.querySelector('.cover.cover-right')
const pageLeft = document.querySelector('.book-page.page-left')


//opening animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn')
}, 2100)
setTimeout(() => {
    coverRight.style.zIndex = -1
}, 2800)


//opening animation (cover left or profile page animation)
document.addEventListener('DOMContentLoaded', () => {
    // Ensure DOM is fully loaded before accessing elements
    const pageLeft = document.querySelector('.page-left');
    if (pageLeft) {
        setTimeout(() => {
            pageLeft.style.zIndex = 20;
        }, 3200);
    } else {
        console.error('Element with class "page-left" not found.');
    }
});


//opening animation (all page right animation)
const pages = document.querySelectorAll('.book-page');  
pages.forEach((_, index) => {
     let totalPages = pages.length;
     let pageNumber = totalPages - 1;
    setTimeout(() => {
        reverseIndex(); 

        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex(); // Assuming reverseIndex is a defined function
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500);
    }, (index + 1) * 200 + 2100);
});