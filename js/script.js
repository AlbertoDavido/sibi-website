function whatsappButton({
  brandName: t = '',
  buttonName: e = '',
  brandSubtitleText: a = '',
  welcomeMessage: i = '',
  phoneNumber: o = '',
  brandImageUrl: r = '',
  callToAction: l = '',
  buttonSize: n = 'large',
  buttonIconSize: w = 22,
  prefillMessage: p = '',
  buttonPosition: d = 'right',
  poweredByColor: s,
}) {
  var c = '' === p ? i : p,
    g = '' !== e;
  let b = `
      <div>
        
<style>
 @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  
    @font-face {
      font-family: 'Helvetica';
      font-style: normal;
      font-weight: normal;
      font-display: optional;
      src: local('Helvetica');
  }
  
   :root {
      --color-navyblue-900: hsl(230, 54%, 11%);
      --color-gray-700: hsl(240, 1%, 31%);
      --color-text-secondary: var(--color-gray-700);
      --color-whatsapp-green-light:hsl(142, 70%,49%);
      --color-whatsapp-green-dark:hsl(173, 86%, 20%)
  }
  
  .font-header {
      font-family: "Inter", "Noto Sans TC", "Noto Sans SC", "Helvetica", "Arial", sans-serif;
      font-weight: 700 !important;
  }
  #AtQkbVSP *,
#AtQkbVSP *:before,
#AtQkbVSP *:after {
    box-sizing: border-box;
}

#AtQkbVSP .RiftfMMe pre {
    font-family: 'Inter', 'Noto Sans TC', 'Noto Sans SC', 'Helvetica', 'Arial',
    sans-serif !important;
    white-space: pre-wrap !important;
    background: white !important;
    color: var(--color-gray-700) !important;
    margin: 0 !important;
    font-size: 16px !important;
    font-weight: normal !important;
    padding: 0px !important;
}

#AtQkbVSP .qGGQxrlS + .thkKXYqp {
    font-family: 'Inter', 'Noto Sans TC', 'Noto Sans SC', 'Helvetica', 'Arial',
    sans-serif !important;
}

#AtQkbVSP .qGGQxrlS {
    position: fixed;
    right: 40px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    z-index: 99999;
}

#AtQkbVSP .rRJlyrNO {
    left: 40px;
    right: unset;
}

#AtQkbVSP .rRJlyrNO .zDSvDPBP {
    justify-content: flex-start;
}

#AtQkbVSP .rRJlyrNO .PsinKQZz {
    text-align: left;
}

@media screen and (max-width: 640px) {
    #AtQkbVSP .qGGQxrlS {
        right: 24px;
    }

    #AtQkbVSP .rRJlyrNO {
        left: 24px;
        right: unset;
    }

    #AtQkbVSP .OCupyRom {
        display: none !important;
    }
}

#AtQkbVSP .GrcHvJgY {
    width: 100px;
    height: 70px;
    border-radius: 500px;
    padding-bottom: auto;
    
}

#AtQkbVSP .RiftfMMe {
    font-family: 'Inter', 'Noto Sans TC', 'Noto Sans SC', 'Helvetica', 'Arial',
    sans-serif;
    margin-bottom: 16px !important;
    display: grid;
    height: 453px !important;
    grid-template-rows: 81px minmax(0px, 1fr);
    overflow: hidden;
    border-radius: 24px !important;
    background-color: white !important;
    box-shadow: 0 24px 50px 10px rgba(0, 102, 255, 0.07);
    max-width: 498px;
    width: calc(100vw - 60px);
}

#AtQkbVSP .zuBYigDP {
    padding: 16px 24px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: var(--color-whatsapp-green-dark) !important;
}

#AtQkbVSP .FKTsTTqZ {
    flex-direction: column;
    position: relative;
    display: flex;
    height: 100%;
    width: 100%;
    background-color: white !important;
    padding: 24px;
}

#AtQkbVSP .aNjxXlzw {
    z-index: 10;
    display: flex;
    height: max-content;
    max-height: 100%;
    max-width: 80%;
    flex-direction: column;
    overflow: auto;
    border-radius: 16px;
    background-color: white !important;
    padding: 10px 18px;
}

#AtQkbVSP .cTGBkzRv {
    z-index: 50;
    display: flex;
    width: 100%;
    background-color: white !important;
    padding: 20px 24px;

    flex-direction: column;
}

#AtQkbVSP .nWEjpaAl:hover {
    opacity: 80%;
    transition: 0.3s;
}

#AtQkbVSP .nWEjpaAl {
    cursor: pointer;
    justify-content: center;
    border-width: 0;
    display: flex;
    height: 56px;
    width: 100%;
    align-items: center;
    align-self: end;
    border-radius: 500px !important;
    background-color: var(--color-whatsapp-green-light) !important;
}

#AtQkbVSP .rfccoCoh {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

#AtQkbVSP .NvZwPXrI {
    color: white;
    font-size: 16px !important;
    padding-left: 8px;
    margin: 0;
}

#AtQkbVSP .NcUvpopV:hover {
    opacity: 80%;
    transition: 0.3s;
}

#AtQkbVSP .NcUvpopV {
    
    
    cursor: pointer;
    justify-content: center !important;
    align-items: center;
    border-width: 0;
    display: flex;
    width: 60px;
    align-items: center;
    align-self: end;
    padding: 0;
    
    border-radius: 50% !important;
    background-color: var(--color-whatsapp-green-light) !important;
    height: 60px;
}

#AtQkbVSP .rRJlyrNO .NcUvpopV {
    align-self: start;
}

#AtQkbVSP .nIzUJfji {
    padding: 9px;
}

#AtQkbVSP .wa-button-size-medium {
    padding: 13px;
}

#AtQkbVSP .SFfmwVVY {
    padding: 17px;
}

#AtQkbVSP .EutnAWdP {
    padding-right: 40px !important;
    padding-left: 40px !important;
}

#AtQkbVSP .kWBkBJWV {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 7px;
}

#AtQkbVSP #nnUqoKiY {
    cursor: pointer;
}

#AtQkbVSP .YxFYOlLg {
    margin-left: 8px;
}

#AtQkbVSP .XEncYjVm {
    color: white;
    font-size: 16px !important;
    margin-top: 0;
    margin-bottom: 0;
}

#AtQkbVSP .CTmMzGDG {
    color: hsl(209 77% 60%) !important;
    text-decoration: none;
}

#AtQkbVSP .ZgBZxcLZ {
    display: inline-block;
    position: relative;
    top: 2px;
}

#AtQkbVSP .ZgBZxcLZ svg {
    margin-right: 6px;
    margin-bottom: 1px;
}

#AtQkbVSP .xwvteAOa {
    margin-top: 12px;
    margin-bottom: 0;
    text-align: center;
    font-size: 16px !important;
}


#AtQkbVSP .PsinKQZz {
    margin-top: 12px;
    text-align: right;
    padding-right: 12px;
    font-size: 13px;
}

#AtQkbVSP .thkKXYqp {
    font-size: 14px;
    position: fixed;
    mix-blend-mode: difference;
    bottom: 14px;

    z-index: 99999;
    color: #bbbbbb;
}

#AtQkbVSP .thkKXYqp.right {
    right: 123px;
}

#AtQkbVSP .thkKXYqp.left {
    left: 55px;
}


@media screen and (max-width: 640px) {
    #AtQkbVSP .thkKXYqp.right {
        right: 107px;
    }

    #AtQkbVSP .thkKXYqp.left {
        left: 40px;
    }
}

#AtQkbVSP #TzblFUbG {
    font-family: 'Inter', 'Noto Sans TC', 'Noto Sans SC', 'Helvetica', 'Arial',
    sans-serif;
    width: 100%;
    min-width: 180px;
}

#AtQkbVSP #RirzmqfW {
    margin: 14px 0;
    text-align: right;
    padding-right: 12px;
    font-size: 14px;
}

#AtQkbVSP .rRJlyrNO #TzblFUbG {
    right: unset;
}

#AtQkbVSP .rRJlyrNO #RirzmqfW {
    text-align: left;
}

#AtQkbVSP #AYIZCyXV {
    /* inline-block relative top-[1px] */
    position: relative;
    display: inline-block;
    top: 1px;
}

#AtQkbVSP #upukYYVs {
    color: hsl(209 77% 60%) !important;
    text-decoration: none;
}

#AtQkbVSP #yqeUvWgS {
    width: 100%;
    min-width: 180px;
}

#AtQkbVSP .zDSvDPBP {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

#AtQkbVSP .ayydiLPW .zDSvDPBP {
    position: relative !important;
}

#AtQkbVSP .eModocIi {
    z-index: 10;
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

#AtQkbVSP .xFLFBRPX {
    display: flex;
    background-color: #dcf7c5 !important;
    margin-top: 16px;
    padding: 18px;
    border-radius: 16px;
    width: 80%;
    overflow: auto;
    max-height: 80px;
    font-size: 16px !important;
    font-weight: normal !important;
}

#AtQkbVSP .aNjxXlzw::-webkit-scrollbar {
    width: 4px !important;
    border-radius: 20px !important;
}

#AtQkbVSP .aNjxXlzw::-webkit-scrollbar-track {
    border-radius: 10px !important;
}

#AtQkbVSP .aNjxXlzw::-webkit-scrollbar-thumb {
    background: #c8c8c8 !important;
    border-radius: 10px !important;
}

#AtQkbVSP .xFLFBRPX::-webkit-scrollbar {
    width: 4px !important;
    border-radius: 20px !important;
}

#AtQkbVSP .xFLFBRPX::-webkit-scrollbar-track {
    border-radius: 10px !important;
}

#AtQkbVSP .xFLFBRPX::-webkit-scrollbar-thumb {
    background: #c8c8c8 !important;
    border-radius: 10px !important;
}

#AtQkbVSP .cXyatLUn {
    margin: 0;
    font-size: 14px !important;
    line-height: 18px !important;
    color: white !important;
}

#AtQkbVSP .ntWWosNi {
    font-size: 20px !important;
    font-weight: 500 !important;
    line-height: 25px !important;
    margin: 0 !important;
    color: white !important;
    padding-bottom: 0 !important;
}

#AtQkbVSP .bqfeOaSI {
    font-size: 14px !important;
    font-weight: 500 !important;
    font-family: 'Inter', 'Noto Sans TC', 'Noto Sans SC', 'Helvetica', 'Arial',
    sans-serif;
    margin-bottom: 8px !important;
    margin-top: 0 !important;
    color: var(--color-navyblue-900) !important;
    min-height: 17px !important;
}

</style>

        
<div id='AtQkbVSP'>
  <div class='qGGQxrlS {{buttonPosition}}'>
      <div id='tClfpqnG' class='RiftfMMe'>
        <div class='zuBYigDP'>
          <div style='display:flex;width:100%'>
              <img alt='logo' src='{{brandImageUrl}}' class='GrcHvJgY'/>
              <div style='padding-left:8px;display:flex;flex-direction:column;color:white'>
                <p class='ntWWosNi'>
                    {{brandName}}
                </p>
                <p class='cXyatLUn'>{{brandSubtitleText}}</p>
              </div>
          </div>
          <svg viewBox='0 0 15 14' fill='#000' xmlns='http://www.w3.org/2000/svg' id='nnUqoKiY' width='20'
              height='20' style='background-color:transparent;fill:white;color:white'>
              <path d='m2.674.569.106.093 4.754 4.754L12.288.662a1.12 1.12 0 0 1 1.678 1.48l-.094.105L9.118 7l4.754 4.753a1.12 1.12 0 0 1-1.479 1.678l-.105-.093-4.754-4.754-4.754 4.754a1.12 1.12 0 0 1-1.678-1.479l.093-.105L5.95 7 1.195 2.247A1.12 1.12 0 0 1 2.675.569Z'>
              </path>
          </svg>
        </div>
        <div class='FKTsTTqZ'>
          <div class='aNjxXlzw'>
              <p
              class='bqfeOaSI'
              >
                {{brandName}}
              </p>
              <pre>{{welcomeMessage}}</pre>
            </div>
          {{prefillMessageSection}}
          <img style='max-width:100%;top:0;left:0;position:absolute;object-fit:cover' alt='WhatsApp Background' src='https://sleekflow.io/static/images/wts-bg.jpg'/>
        </div>
        <div class='cTGBkzRv'>
            <a rel='noopener noreferrer' target='_blank'
              style='text-decoration:none;width:100%'
              href='https://api.whatsapp.com/send?phone={{phoneNumber}}&amp;text={{defaultChatMessage}}'>
              <button class='nWEjpaAl'>
                  <div class='rfccoCoh'>
                    <svg viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' width='22' height='22'>
                      <path d='m.76 21.24 1.412-5.12A10.324 10.324 0 0 1 .76 10.93C.76 5.35 5.35.76 10.964.76 16.58.76 21.24 5.35 21.24 10.93c0 5.578-4.661 10.31-10.276 10.31-1.765 0-3.46-.565-4.978-1.413L.76 21.24Z' fill='#EDEDED'></path>
                        <path d='m6.268 17.991.318.177c1.307.812 2.825 1.306 4.414 1.306 4.626 0 8.474-3.848 8.474-8.545 0-4.696-3.848-8.404-8.51-8.404-4.66 0-8.439 3.743-8.439 8.404 0 1.624.46 3.213 1.307 4.555l.212.318-.812 2.966 3.036-.777Z' fill='#25D366'></path>
                      <path d='m8.245 6.198-.671-.036a.802.802 0 0 0-.565.212c-.318.283-.848.812-.989 1.519-.247 1.059.141 2.33 1.06 3.601.918 1.271 2.683 3.32 5.79 4.202.989.283 1.766.106 2.402-.282.494-.318.812-.812.918-1.342l.105-.494a.355.355 0 0 0-.176-.389l-2.225-1.024a.337.337 0 0 0-.423.106l-.883 1.13a.275.275 0 0 1-.283.07c-.6-.211-2.613-1.059-3.707-3.177-.036-.106-.036-.212.035-.283l.848-.953c.07-.106.105-.247.07-.353L8.527 6.41a.308.308 0 0 0-.282-.212Z' fill='#FEFEFE'></path>
                    </svg>
                    <p class='NvZwPXrI font-header'>{{callToAction}}</p>
                  </div>
              </button>
            </a>
            
            <p class='xwvteAOa'>
              <span>
                <span class='ZgBZxcLZ'>
                  
                
            </p>
            
        </div>
      </div>
      <button id='yEkSeWEW' class='NcUvpopV {{buttonSize}} {{buttonPadding}}'>
        <div class='kWBkBJWV'>
          <div style='width: {{buttonIconSize}}px;height: {{buttonIconSize}}px'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
  <!-- WhatsApp Icon (default green) -->
  <path fill="white" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
</svg>
          </div>
          <p class='XEncYjVm font-header {{buttonMargin}}'>{{buttonName}}</p>
        </div>
      </button>
      <div id='TzblFUbG'>
        <p id='RirzmqfW'>
        <span id='AYIZCyXV'>
          
        </span>
        
        <a id='upukYYVs' href='https://sleekflow.io/whatsapp-button-generator' target='_blank' rel='noopener noreferrer nofollow'></a>
        </p>
      </div>
  </div>
  
</div>

      </div>  
       `;
  var f = {
    regular: 'wa-button-size-regular',
    large: 'wa-button-size-large',
    small: 'wa-button-size-small',
  };
  (b = (b = (b = (b = (b = (b = (b = (b = b.replaceAll(
    '{{buttonName}}',
    e,
  )).replaceAll('{{brandImageUrl}}', r)).replaceAll(
    '{{brandName}}',
    t,
  )).replaceAll('{{brandSubtitleText}}', a)).replaceAll(
    '{{buttonSize}}',
    f[n] || f.large,
  )).replaceAll('{{callToAction}}', l)).replaceAll(
    '{{phoneNumber}}',
    o,
  )).replaceAll('{{prefillMessage}}', p)),
    (b =
      '' === p
        ? b.replaceAll('{{prefillMessageSection}}', '')
        : b.replaceAll(
            '{{prefillMessageSection}}',
            "<div class='eModocIi'><div class='xFLFBRPX'>" +
              p +
              '</div></div>',
          )),
    (b = (b = (b = (b =
      'left' === d
        ? b.replaceAll('{{buttonPosition}}', 'wa-widget-wrapper-left')
        : b.replaceAll('{{buttonPosition}}', '')).replaceAll(
      'text={{defaultChatMessage}}',
      'text=' + c.replace(/(?:\r\n|\r|\n)/g, '%0a'),
    )).replaceAll('{{welcomeMessage}}', i)).replaceAll(
      '{{buttonIconSize}}',
      w,
    )),
    (b = g
      ? (b = b.replaceAll(
          '{{buttonMargin}}',
          'wa-cta-button-label-margin',
        )).replaceAll('{{buttonPadding}}', 'wa-button-size-with-words')
      : (b = b.replaceAll('{{buttonMargin}}', '')).replaceAll(
          '{{buttonPadding}}',
          '',
        )),
    (b = (b = s
      ? (b = b.replaceAll('{{poweredByColor}}', 'color: ' + s)).replaceAll(
          '{{hideBlendText}}',
          'display: none',
        )
      : (b = b.replaceAll(
          '{{poweredByColor}}',
          'color: white;opacity: 0',
        )).replaceAll('{{hideBlendText}}', '')).replaceAll(
      '{{poweredByBlendLabel}}',
      'left' === d ? 'left' : 'right',
    )),
    document.querySelector('body').insertAdjacentHTML('beforeend', b),
    (document.querySelector('#tClfpqnG').style.display = 'none'),
    (document.querySelector('#yEkSeWEW').onclick = () => {
      var t = document.querySelector('#tClfpqnG'),
        e = window.getComputedStyle(t).display;
      t.style.display = 'none' === e ? 'grid' : 'none';
    }),
    (document.querySelector('#nnUqoKiY').onclick = () => {
      document.querySelector('#tClfpqnG').style.display = 'none';
    });
}

<script
    src='js/script.js'
    async
    onLoad="whatsappButton({
    buttonName:'',
    buttonIconSize: '40',
    brandImageUrl:'images/sibilogo-edit3.png',
    brandName:'Sibi Homecare',
    brandSubtitleText:'Replies instantly',
    buttonSize:'Small',
    buttonPosition:'right',
    callToAction:'Start Chat',
    phoneNumber:'254759138000',
    welcomeMessage:'Hi there 👋\n\nHow can we be of help to you today?',
    prefillMessage:'',
    })"
    >
</script>











