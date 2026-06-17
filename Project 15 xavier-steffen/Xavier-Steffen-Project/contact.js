 document.addEventListener('DOMContentLoaded', function(){

      // ORIGINAL FORM ELEMENTS
      const contactForm = document.getElementById('contactForm');
      const nameEl = document.getElementById('name');
      const emailEl = document.getElementById('email');
      const phoneEl = document.getElementById('phone');
      const subjectEl = document.getElementById('subject');
      const messageEl = document.getElementById('message');

      // MATH / CAPTCHA ELEMENTS
      const captchaLabel = document.getElementById('captchaLabel');
      const captchaInput = document.getElementById('captchaInput');
      const refreshBtn = document.getElementById('refreshBtn');
      const initialSendBtn = document.getElementById('initialSendBtn');
      const captchaError = document.getElementById('captchaError');

      // REVIEW PANEL ELEMENTS
      const reviewPanel = document.getElementById('reviewPanel');
      const missingList = document.getElementById('missingList');
      const finalSubmitBtn = document.getElementById('finalSubmitBtn');
      const finalMsg = document.getElementById('finalMsg');

      // REVIEW INPUTS (duplicates)
      const r_name = document.getElementById('r_name');
      const r_email = document.getElementById('r_email');
      const r_phone = document.getElementById('r_phone');
      const r_subject = document.getElementById('r_subject');
      const r_message = document.getElementById('r_message');

      // which fields are required to be non-empty
      const requiredFields = [
        { id: 'name', label: 'Name', refOriginal: nameEl, refReview: r_name, validator: v => v.trim() !== '' },
        { id: 'email', label: 'Email', refOriginal: emailEl, refReview: r_email, validator: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) },
        { id: 'phone', label: 'Phone', refOriginal: phoneEl, refReview: r_phone, validator: v => v.trim().replace(/\D/g,'').length >= 7 },
        { id: 'message', label: 'Message', refOriginal: messageEl, refReview: r_message, validator: v => v.trim() !== '' }
      ];

      // current correct answer for captcha
      let correctAnswer = null;

      function generateChallenge(){
        const a = Math.floor(Math.random()*9) + 1; // 1..9
        const b = Math.floor(Math.random()*9) + 1; // 1..9
        correctAnswer = a + b;
        captchaLabel.textContent = `${a} + ${b} =`;
        captchaInput.value = '';
        initialSendBtn.disabled = true;
        captchaError.textContent = '';
        captchaInput.setAttribute('aria-label', `Answer for ${a} plus ${b}`);
      }

      function checkCaptcha(){
        const v = captchaInput.value.trim();
        if(v === ''){
          initialSendBtn.disabled = true;
          captchaError.textContent = '';
          return false;
        }
        const num = parseInt(v,10);
        if(!Number.isNaN(num) && num === correctAnswer){
          initialSendBtn.disabled = false;
          captchaError.textContent = '';
          return true;
        } else {
          initialSendBtn.disabled = true;
          captchaError.textContent = 'Incorrect answer. Please try again.';
          return false;
        }
      }

      // when initial SEND clicked after solving captcha
      initialSendBtn.addEventListener('click', function(){
        if(!checkCaptcha()){
          captchaError.textContent = 'Solve the math correctly first.';
          captchaInput.focus();
          return;
        }

        // copy current original form values to review inputs
        r_name.value = nameEl.value;
        r_email.value = emailEl.value;
        r_phone.value = phoneEl.value;
        r_subject.value = subjectEl.value;
        r_message.value = messageEl.value;

        // show review panel
        reviewPanel.style.display = 'block';
        reviewPanel.setAttribute('aria-hidden','false');

        // update missing list immediately
        updateMissingList();
        // focus first missing field if any, otherwise put focus on final submit
        const firstMissing = missingList.querySelector('li');
        if(firstMissing){
          const key = firstMissing.getAttribute('data-field');
          // find corresponding review input and focus
          const item = requiredFields.find(it => it.id === key);
          if(item) item.refReview.focus();
        } else {
          finalSubmitBtn.focus();
        }
      });

      refreshBtn.addEventListener('click', function(e){
        e.preventDefault();
        generateChallenge();
        captchaInput.focus();
      });

      captchaInput.addEventListener('input', checkCaptcha);

      // update missing list based on review inputs
      function updateMissingList(){
        const missing = [];
        requiredFields.forEach(f=>{
          const val = (f.refReview.value || '').toString();
          const ok = f.validator(val);
          if(!ok) missing.push({ id: f.id, label: f.label });
        });

        // render missing list
        missingList.innerHTML = '';
        if(missing.length === 0){
          missingList.style.display = 'none';
          finalMsg.textContent = 'All required fields complete — you can final submit.';
          finalSubmitBtn.disabled = false;
        } else {
          missingList.style.display = 'block';
          missing.forEach(m=>{
            const li = document.createElement('li');
            li.textContent = m.label + ' is missing or invalid';
            li.setAttribute('data-field', m.id);
            missingList.appendChild(li);
          });
          finalMsg.textContent = `${missing.length} field(s) required.`;
          finalSubmitBtn.disabled = true;
        }

        // sync review values back to original form so both stay consistent
        requiredFields.forEach(f=>{
          f.refOriginal.value = f.refReview.value;
        });

        // also sync optional subject
        subjectEl.value = r_subject.value;
      }

      // attach live listeners to review inputs
      [r_name, r_email, r_phone, r_message, r_subject].forEach(el=>{
        el.addEventListener('input', updateMissingList);
      });

      // final submit action (demo)
      finalSubmitBtn.addEventListener('click', function(){
        // final safety check
        updateMissingList();
        if(finalSubmitBtn.disabled) return;

        // Here you would normally submit to server. For demo we'll show success.
        // Example: contactForm.submit();  // <-- if you want to submit real form
        alert('Form submitted successfully');
        // Reset UI (optional)
        generateChallenge();
        reviewPanel.style.display = 'none';
        reviewPanel.setAttribute('aria-hidden','true');
        // clear fields if you like:
        // contactForm.reset();
      });

      // initial setup
      generateChallenge();
    });