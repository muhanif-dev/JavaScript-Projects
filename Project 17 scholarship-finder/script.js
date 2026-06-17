const eduInput = document.getElementById("edu-input");
const searchBtn = document.getElementById("search-btn");

const model = document.getElementById("model");
const modelCloseBtn = document.getElementById("model-close-btn");


searchBtn.addEventListener("click", () => {
    
    if(eduInput.value === "matric") {

        const educationLevel = "Matric";

        const scholarshipName1 = "Alkhidmat Foundation Scholarship (Matric Passed Needy Students)"
        const scholarshipName2 = "Akhuwat Foundation Education Support (Matric-Level Students Eligible)"
        const scholarshipName3 = "Dalda Foundation Scholarship (Matric Students Eligible for Intermediate Funding)";
        const scholarshipName4 = "NTS Need-Based Scholarships (Some Programs Accept Matric → Diploma Students)"
        const scholarshipName5 = "Pakistan Bait-ul-Mal Education Assistance (For Low-Income Matric Students)"

        const link1 = document.getElementById("apply-link-1");
        const link2 = document.getElementById("apply-link-2");
        const link3 = document.getElementById("apply-link-3");
        const link4 = document.getElementById("apply-link-4");
        const link5 = document.getElementById("apply-link-5");

        const educationLevelHeading = document.getElementById('s-heading');

        const scholarshipNameHeading1 = document.getElementById('s-name1');
        const scholarshipNameHeading2 = document.getElementById('s-name2');
        const scholarshipNameHeading3 = document.getElementById('s-name3');
        const scholarshipNameHeading4 = document.getElementById('s-name4');
        const scholarshipNameHeading5 = document.getElementById('s-name5');

        model.classList.remove('model');

        educationLevelHeading.textContent = educationLevel;

        scholarshipNameHeading1.textContent = scholarshipName1;
        scholarshipNameHeading2.textContent = scholarshipName2;
        scholarshipNameHeading3.textContent = scholarshipName3;
        scholarshipNameHeading4.textContent = scholarshipName4;
        scholarshipNameHeading5.textContent = scholarshipName5;

        link1.href = "https://alkhidmat.org/scholarships/";
        link2.href = "https://akhuwat.org.pk/education/";
        link3.href = "https://www.daldafoundation.pk/scholarship-form/";
        link4.href = "https://www.nts.org.pk/new/scholarships.php";
        link5.href = "https://www.pbm.gov.pk/";
    }
    else if(eduInput.value === "fsc") {


const educationLevel = "FSC";

        const scholarshipName1 = "Punjab Educational Endowment Fund (PEEF) — Intermediate Scholarship";
        const scholarshipName2 = "Sindh Educational Endowment Fund (SEEF) — Intermediate / Inter-level scholarships";
        const scholarshipName3 = "Balochistan Education Endowment Fund (BEEF) — Intermediate / FSc / DAE Scholarships";
        const scholarshipName4 = "Punjab Group of Colleges (PGC) - Scholarships for FSc students";
        const scholarshipName5 = "Khyber Pakhtunkhwa Education Foundation (KPEF) — Merit-cum-Inaffordability / Provincial Scholarships";

        const link1 = document.getElementById("apply-link-1");
        const link2 = document.getElementById("apply-link-2");
        const link3 = document.getElementById("apply-link-3");
        const link4 = document.getElementById("apply-link-4");
        const link5 = document.getElementById("apply-link-5");

        const educationLevelHeading = document.getElementById('s-heading');

        const scholarshipNameHeading1 = document.getElementById('s-name1');
        const scholarshipNameHeading2 = document.getElementById('s-name2');
        const scholarshipNameHeading3 = document.getElementById('s-name3');
        const scholarshipNameHeading4 = document.getElementById('s-name4');
        const scholarshipNameHeading5 = document.getElementById('s-name5');

        model.classList.remove('model');

        educationLevelHeading.textContent = educationLevel;

        scholarshipNameHeading1.textContent = scholarshipName1;
        scholarshipNameHeading2.textContent = scholarshipName2;
        scholarshipNameHeading3.textContent = scholarshipName3;
        scholarshipNameHeading4.textContent = scholarshipName4;
        scholarshipNameHeading5.textContent = scholarshipName5;

        link1.href = "https://www.peef.org.pk/";
        link2.href = "https://www.beef.org.pk/";
        link3.href = "https://beef.org.pk/ ";
        link4.href = "https://pgc.edu/ ";
        link5.href = "https://ef.kp.gov.pk/scholarship/merit_cum_inaffordability ";
    }
     else if(eduInput.value === "bs") {


const educationLevel = "BS";

        const scholarshipName1 = "Ehsaas Undergraduate Scholarship (BS 1st-8th Semester)";
        const scholarshipName2 = "HEC Need-Based Scholarship (BS All Semesters)";
        const scholarshipName3 = "Prime Minister's Laptop / Youth Program (BS All Semesters)";
        const scholarshipName4 = "NEST Scholarships (BS All Semesters)";
        const scholarshipName5 = "USAID Merit & Need-Based Scholarship (BS 1st-8th Semester)";

        const link1 = document.getElementById("apply-link-1");
        const link2 = document.getElementById("apply-link-2");
        const link3 = document.getElementById("apply-link-3");
        const link4 = document.getElementById("apply-link-4");
        const link5 = document.getElementById("apply-link-5");

        const educationLevelHeading = document.getElementById('s-heading');

        const scholarshipNameHeading1 = document.getElementById('s-name1');
        const scholarshipNameHeading2 = document.getElementById('s-name2');
        const scholarshipNameHeading3 = document.getElementById('s-name3');
        const scholarshipNameHeading4 = document.getElementById('s-name4');
        const scholarshipNameHeading5 = document.getElementById('s-name5');

        model.classList.remove('model');

        educationLevelHeading.textContent = educationLevel;

        scholarshipNameHeading1.textContent = scholarshipName1;
        scholarshipNameHeading2.textContent = scholarshipName2;
        scholarshipNameHeading3.textContent = scholarshipName3;
        scholarshipNameHeading4.textContent = scholarshipName4;
        scholarshipNameHeading5.textContent = scholarshipName5;

        link1.href = "https://ehsaas.hec.gov.pk/";
        link2.href = "https://www.hec.gov.pk/english/scholarshipsgrants/NBS/";
        link3.href = "https://pmyp.gov.pk/";
        link4.href = "https://nest.org.pk/";
        link5.href = "https://www.hec.gov.pk/english/scholarshipsgrants/USAID/";


    }
    else {
        alert("check spelling OR fill all The Fields");
    }
});


modelCloseBtn.addEventListener("click",() => {
    model.classList.add('model');
});