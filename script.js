document.addEventListener('DOMContentLoaded', function() {

    const resumePreview = document.getElementById('resumePreview');
    const fontFamilySelect = document.getElementById('fontFamily');
    const colorButtons = document.querySelectorAll('.color-btn');
    const lineSpacingSlider = document.getElementById('lineSpacing');
    const spacingValue = document.getElementById('spacingValue');
    const selectedColorSpan = document.getElementById('selectedColor');

    const editName = document.getElementById('editName');
    const editTitle = document.getElementById('editTitle');
    const editProfile = document.getElementById('editProfile');

    const previewName = document.getElementById('previewName');
    const previewTitle = document.getElementById('previewTitle');
    const previewProfile = document.getElementById('previewProfile');

    const resetBtn = document.getElementById('resetBtn');
    const printBtn = document.getElementById('printBtn');
    const downloadBtn = document.getElementById('downloadBtn');

    const defaultValues = {
        fontFamily: "'Open Sans', sans-serif",
        themeColor: '#2563eb',
        lineSpacing: 1.5,
        name: 'Ajmal Abdul Rahimzai',
        title: 'Computer Software Engineer',
        profile: 'Motivated Computer Software Engineer with experience in programming, web development, IT problem-solving, and digital services.'
    };

    fontFamilySelect.addEventListener('change', () => {
        resumePreview.style.fontFamily = fontFamilySelect.value;
    });

    colorButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const color = btn.dataset.color;
            document.querySelectorAll('.resume-header h1, .resume-section h2 i, .company')
                .forEach(el => el.style.color = color);
            selectedColorSpan.textContent = color;
        });
    });

    lineSpacingSlider.addEventListener('input', () => {
        spacingValue.textContent = lineSpacingSlider.value;
        resumePreview.style.lineHeight = lineSpacingSlider.value;
    });

    editName.addEventListener('input', () => {
        previewName.textContent = editName.value || defaultValues.name;
    });

    editTitle.addEventListener('input', () => {
        previewTitle.textContent = editTitle.value || defaultValues.title;
    });

    editProfile.addEventListener('input', () => {
        previewProfile.textContent = editProfile.value || defaultValues.profile;
    });

    resetBtn.addEventListener('click', () => {
        editName.value = defaultValues.name;
        editTitle.value = defaultValues.title;
        editProfile.value = defaultValues.profile;

        previewName.textContent = defaultValues.name;
        previewTitle.textContent = defaultValues.title;
        previewProfile.textContent = defaultValues.profile;
    });

    printBtn.addEventListener('click', () => window.print());

    downloadBtn.addEventListener('click', () =>
        alert('Use Print → Save as PDF')
    );
});
