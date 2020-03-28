let darkModeOn = window.matchMedia('(prefers-color-scheme: dark)').matches;
const darkModeToggle = document.getElementById('dark-mode-toggle');
const styleTag = document.createElement('style');

darkModeToggle.innerText = darkModeOn ? 'Light mode' : 'Dark mode';
document.body.appendChild(styleTag);

darkModeToggle.addEventListener('click', () => {
  const darkCss = `
    body{ background-color: #000; }
    :root{
      --main-light: #26114d;
      --main-normal: #b08aff;
      --main-dark: #e9deff;
      --header-bg: #000000ef;
    }
  `;
  const lightCss = `
    body{ background-color: #fff; }
    :root{
      --main-light: #F4EEFF;
      --main-normal: #7137EE;
      --main-dark: #3A1D78;
      --header-bg: #ffffffef;
    }
  `;

  styleTag.innerText = darkModeOn ? lightCss : darkCss;
  darkModeToggle.innerText = !darkModeOn ? 'Light mode' : 'Dark mode';
  darkModeOn = !darkModeOn;
});

const toInput = document.getElementById('to');

toInput.addEventListener('change', e => e.target.value = 'contact@charleseller.dev');
toInput.addEventListener('click', e => e.target.select());

document.getElementById('year').innerText = new Date().getFullYear();
