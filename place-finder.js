reearth.ui.show(`
  <style>
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2)
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  
  @font-face {
    font-family: "Noto Sans";
    font-style: normal;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/notosans/v27/o-0IIpQlx3QUlC5A4PNr5TRASf6M7Q.woff2)
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }

  body {
    margin: 0;
    height: auto;
    width: 100%;
    overflow: hidden;
  }
  #wrapper {
    background: #141414;
    height: 44px;
    max-height: 750px;
    border-radius: 5px;
  }

  #header {
    height: 44px;
    position: relative;
    overflow: hidden;
    font-family: "Roboto";
    font-style: normal;
    font-size: 14px;
    color: #BFBFBF;
    border-radius: 5px;
  }

  #header div {
    display: inline-block;
  }

  #plugin-icon {
    width: 44px;
    height: 44px;
    position: relative;
  }

  #plugin-icon svg {
    padding-left: 12px;
    padding-top: 12px;
  }

  #close-plugin-btn {
    float: right;
    padding-top: 10px;
    padding-right: 12px;
  }

  .vertical-center {
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  #container {
    margin: 8px 12px;
    padding-bottom: 7px;
    border-radius: 4px;
    height: auto;
  }

  .item {
    color: #727070;
    background-color: #262626;
    border: 1px solid #262626;
    border-radius: 4px;
    padding: 10px 5px 10px 15px;
    margin-bottom: 10px;
    font-family: "Noto Sans";
    font-size: 14px;
  }

  .item > div {
    display: inline-block;
  }

  .item .left-part {
    width: 235px;
  }

  .item .right-part {
    width: 15px;
    height: 30px;
    vertical-align: middle;
  }

  .display-name {
    height: 25px;
    display: inline-block;
    font-family: "Noto Sans";
    font-size: 12px;
    color: #BFBFBF;
  }

  .item .location-icon {
    padding-left: 10px;
    padding-right: 5px;
  }

  #search-input-div {
    width: 252px;
    height: 26px;
    border: 1px solid #262626;
    border-radius: 4px;
    background-color: #141414;
    display: inline-block;
  }

  #search-input{
    border: none;
    width: 220px;
    height: 24px;
    color: #BFBFBF;
    background-color: #141414;
  }

  #search-input::placeholder {
    font-size: 12px;
    padding-left: 4px;
  }

  #search-input:focus {
    outline: none;
  }

  #search-input:-webkit-autofill {
    -webkit-background-clip: text;
    -webkit-text-fill-color: #BFBFBF;
  }

  #place-marker-icon {
    display: inline-block;
  }

  #place-marker-icon svg {
    margin-bottom: -4px;
  }

  #help-span {
    position: absolute;
    margin-top: 5px;
    margin-left: 230px;
  }

  #help-content {
    display: none;
    border-radius: 4px;
    font-family: "Noto Sans";
    font-size: 12px;
    color: #C7C5C5;
    background-color: #393939;
    padding: 12px;
    margin-top: 10px;
  }

  #help-header {
    padding-bottom: 12px;
  }

  #help-header .close-btn {
    float: right;
  }

  .marker-svg {
    margin-top: 2px;
  }

  #search-btn {
    margin-top: 15px;
    margin-bottom: 10px;
    width: 100%;
    height: 30px;
    background-color: #262626;
    color: #525252;
    border-radius: 4px;
    border: none;
    font-family: "Noto Sans";
    font-size: 12px;
  }


  .cursor-btn {
    cursor: pointer;
  }

  .white-btn-effect:active {
    background-color: #0F62FE;
    color: #ffffff;
  }

  #content {
    height: auto;
    min-height: 85px;
  }

  #result-section {
    height: auto;
    display: none;
  }

  #result-display {
    height: auto;
    max-height: 300px;
    overflow: scroll;
    color: black;
    margin: 5px 0px 10px 0px;
    border-radius: 4px;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  #result-display::-webkit-scrollbar {
    display: none;
  }

  #no-result {
    padding: 14px 15px;
    font-family: "Noto Sans";
    font-size: 12px;
    background-color: #262626;
    color: #E0E0E0;
  }

  .label-name {
    font-family: "Noto Sans";
    font-size: 12px;
    color: #727070;
  }

  /* Radio */
  .radio-outside {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default radio button */
  .radio-outside input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  /* Create a custom radio button */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    border: 1px solid #BFBFBF;
  }

  /* On mouse-over, add a grey background color */
  .radio-outside:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the radio button is checked, add a blue background */
  .radio-outside input:checked ~ .checkmark {
    background-color: #0F62FE;
    border: none;
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the indicator (dot/circle) when checked */
  .radio-outside input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  .radio-outside .checkmark:after {
    top: 5px;
    left: 5px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: white;
  }
  /* End Radio */

  .latlng-display {
    height: 20px;
    font-size: 12px;
    font-family: "Noto Sans";
    color: #727070;
  }

  .name-display {
    font-size: 12px;
    font-family: "Noto Sans";
  }

  #place-marker-btn {
    margin-bottom: 12px;
    width: 100%;
    height: 30px;
    border-radius: 4px;
    border: 1px solid #727070;
    color: #727070;
    background-color: #141414;
  }

  #delete-marker-div {
    margin-top: 8px;
    font-size: 12px;
    font-family: "Noto Sans";
    color: #727070;
    height: 24px;
  }

  #delete-marker-div span {
    float: right;
    padding-top: 3px;
  }
  #delete-marker-div span svg{
    margin-bottom: -1px;
  }

  #copyright {
    text-align:right;
    font-family: "Roboto";
    font-style: normal;
    font-size: 9px;
    color: grey !important;
    text-decoration:none;
  }

  #copyright a:visited {
    color: grey !important;
    text-decoration:none;
  }


  </style>
  <div id="wrapper">
    <div id="header">
      <div class="cursor-btn" id="plugin-icon" onclick="openClosePlugin()">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.874 16.8747V9.02618C16.874 8.9391 16.8558 8.85298 16.8206 8.77334C16.7854 8.6937 16.7339 8.6223 16.6695 8.56373L10.419 2.8813C10.304 2.7767 10.1541 2.71874 9.99857 2.71875C9.84308 2.71876 9.69318 2.77672 9.57813 2.88132L3.32856 8.56373C3.26414 8.62231 3.21266 8.6937 3.17744 8.77333C3.14222 8.85297 3.12402 8.93908 3.12402 9.02615V16.8747" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M1.24902 16.875H18.749" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.874 16.874V12.499C11.874 12.3333 11.8082 12.1743 11.691 12.0571C11.5738 11.9399 11.4148 11.874 11.249 11.874H8.74902C8.58326 11.874 8.42429 11.9399 8.30708 12.0571C8.18987 12.1743 8.12402 12.3333 8.12402 12.499V16.874" stroke="#BFBFBF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      
      <div class="vertical-center" id="plugin-title">
        Place Finder
      </div>

      <span class="cursor-btn" id="close-plugin-btn" onclick="openClosePlugin()">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.625 4.375L4.375 15.625" stroke="#595959" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.625 15.625L4.375 4.375" stroke="#595959" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </div>
    <div id="container">
      <input type="hidden" id="data-store" data-markerlayerid=""/>
      <div id="content">
        <div id="search-box">
          <div id="search-input-div">
            <span class="cursor-btn" id="help-span" onclick="openCloseHelp('open')">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1404_7265)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00033 1.99935C4.68662 1.99935 2.00033 4.68564 2.00033 7.99935C2.00033 11.3131 4.68662 13.9993 8.00033 13.9993C11.314 13.9993 14.0003 11.3131 14.0003 7.99935C14.0003 4.68564 11.314 1.99935 8.00033 1.99935ZM0.666992 7.99935C0.666992 3.94926 3.95024 0.666016 8.00033 0.666016C12.0504 0.666016 15.3337 3.94926 15.3337 7.99935C15.3337 12.0494 12.0504 15.3327 8.00033 15.3327C3.95024 15.3327 0.666992 12.0494 0.666992 7.99935Z" fill="#4A4A4A"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33301 11.3327C7.33301 10.9645 7.63148 10.666 7.99967 10.666H8.00634C8.37453 10.666 8.67301 10.9645 8.67301 11.3327C8.67301 11.7009 8.37453 11.9993 8.00634 11.9993H7.99967C7.63148 11.9993 7.33301 11.7009 7.33301 11.3327Z" fill="#4A4A4A"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.17248 5.34862C7.86213 5.29539 7.54296 5.35371 7.27149 5.51326C7.00003 5.6728 6.79378 5.92327 6.68929 6.22031C6.56711 6.56763 6.1865 6.75015 5.83917 6.62797C5.49185 6.50579 5.30933 6.12518 5.43151 5.77785C5.64049 5.18378 6.05298 4.68283 6.59592 4.36375C7.13885 4.04466 7.7772 3.92802 8.39789 4.03448C9.01859 4.14095 9.58157 4.46365 9.98714 4.94543C10.3926 5.42711 10.6146 6.03673 10.6137 6.66635C10.6134 7.68659 9.85703 8.36034 9.31687 8.72045C9.02645 8.91406 8.74077 9.05642 8.53033 9.14995C8.42416 9.19714 8.33476 9.23295 8.27034 9.25749C8.23807 9.26978 8.21191 9.2793 8.19287 9.28608L8.16972 9.29418L8.16234 9.2967L8.15974 9.29758L8.15872 9.29792C8.15852 9.29799 8.15789 9.2982 7.94707 8.66575L8.15789 9.2982C7.80859 9.41463 7.43105 9.22586 7.31461 8.87656C7.19826 8.5275 7.3867 8.15022 7.73555 8.03352L7.7347 8.03381C7.73477 8.03379 7.73483 8.03377 7.73555 8.03352L7.74619 8.02979C7.75645 8.02614 7.77326 8.02004 7.79568 8.0115C7.84063 7.99438 7.90748 7.96768 7.98881 7.93154C8.15337 7.8584 8.36769 7.75076 8.57727 7.61104C9.037 7.30456 9.2804 6.9785 9.2804 6.66575L9.2804 6.66475C9.28087 6.34987 9.16989 6.04499 8.9671 5.8041C8.76432 5.56321 8.48283 5.40186 8.17248 5.34862Z" fill="#4A4A4A"/>
                </g>
                <defs>
                <clipPath id="clip0_1404_7265">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
              </svg>
            </span>
            <input type="text" id="search-input" placeholder="Search">    
          </div>
          <span class="cursor-btn marker-svg" id="place-marker-icon" onclick=placeMarkerIcon(this)>
            <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.47949 12.6878C2.47949 12.3657 2.74066 12.1045 3.06283 12.1045H10.9378C11.26 12.1045 11.5212 12.3657 11.5212 12.6878C11.5212 13.01 11.26 13.2712 10.9378 13.2712H3.06283C2.74066 13.2712 2.47949 13.01 2.47949 12.6878Z" fill="#0F62FE"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00033 4.52116C6.35599 4.52116 5.83366 5.04349 5.83366 5.68783C5.83366 6.33216 6.35599 6.85449 7.00033 6.85449C7.64466 6.85449 8.16699 6.33216 8.16699 5.68783C8.16699 5.04349 7.64466 4.52116 7.00033 4.52116ZM4.66699 5.68783C4.66699 4.39916 5.71166 3.35449 7.00033 3.35449C8.28899 3.35449 9.33366 4.39916 9.33366 5.68783C9.33366 6.97649 8.28899 8.02116 7.00033 8.02116C5.71166 8.02116 4.66699 6.97649 4.66699 5.68783Z" fill="#0F62FE"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00033 1.89616C5.99471 1.89616 5.03029 2.29564 4.31921 3.00671C3.60814 3.71779 3.20866 4.68221 3.20866 5.68783C3.20866 7.44654 4.19265 9.06221 5.25301 10.2816C5.77607 10.8831 6.30062 11.3685 6.69453 11.7033C6.80895 11.8006 6.91199 11.8848 7.00032 11.9552C7.08866 11.8848 7.1917 11.8006 7.30612 11.7033C7.70003 11.3685 8.22458 10.8831 8.74764 10.2816C9.808 9.06221 10.792 7.44654 10.792 5.68783C10.792 4.68221 10.3925 3.71779 9.68144 3.00671C8.97036 2.29564 8.00594 1.89616 7.00033 1.89616ZM7.00033 12.6878C6.66581 13.1657 6.66565 13.1656 6.66547 13.1655L6.66388 13.1644L6.66036 13.1619L6.64865 13.1535C6.6388 13.1465 6.62491 13.1365 6.60725 13.1236C6.57194 13.0978 6.5215 13.0605 6.45811 13.012C6.33139 12.9152 6.15255 12.7738 5.93894 12.5923C5.51253 12.2298 4.94333 11.7035 4.37264 11.0472C3.2455 9.75095 2.04199 7.86661 2.04199 5.68783C2.04199 4.37279 2.56439 3.11162 3.49425 2.18175C4.42412 1.25189 5.68529 0.729492 7.00033 0.729492C8.31536 0.729492 9.57653 1.25189 10.5064 2.18175C11.4363 3.11162 11.9587 4.37279 11.9587 5.68783C11.9587 7.86661 10.7552 9.75095 9.62801 11.0472C9.05732 11.7035 8.48812 12.2298 8.06171 12.5923C7.84811 12.7738 7.66926 12.9152 7.54254 13.012C7.47915 13.0605 7.42871 13.0978 7.3934 13.1236C7.37574 13.1365 7.36185 13.1465 7.352 13.1535L7.3403 13.1619L7.33678 13.1644L7.33561 13.1652C7.33544 13.1653 7.33485 13.1657 7.00033 12.6878ZM7.00033 12.6878L7.33485 13.1657C7.13399 13.3063 6.86633 13.3061 6.66547 13.1655L7.00033 12.6878Z" fill="#0F62FE"/>
            </svg>
          </span>
          <div id="help-content">
            <div id="help-header">
              <svg style="margin-bottom: -4px" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1404_7231)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00033 1.99935C4.68662 1.99935 2.00033 4.68564 2.00033 7.99935C2.00033 11.3131 4.68662 13.9993 8.00033 13.9993C11.314 13.9993 14.0003 11.3131 14.0003 7.99935C14.0003 4.68564 11.314 1.99935 8.00033 1.99935ZM0.666992 7.99935C0.666992 3.94926 3.95024 0.666016 8.00033 0.666016C12.0504 0.666016 15.3337 3.94926 15.3337 7.99935C15.3337 12.0494 12.0504 15.3327 8.00033 15.3327C3.95024 15.3327 0.666992 12.0494 0.666992 7.99935Z" fill="#C7C5C5"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33301 11.3327C7.33301 10.9645 7.63148 10.666 7.99967 10.666H8.00634C8.37453 10.666 8.67301 10.9645 8.67301 11.3327C8.67301 11.7009 8.37453 11.9993 8.00634 11.9993H7.99967C7.63148 11.9993 7.33301 11.7009 7.33301 11.3327Z" fill="#C7C5C5"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.17248 5.34862C7.86213 5.29539 7.54296 5.35371 7.27149 5.51326C7.00003 5.6728 6.79378 5.92327 6.68929 6.22031C6.56711 6.56763 6.1865 6.75015 5.83917 6.62797C5.49185 6.50579 5.30933 6.12518 5.43151 5.77785C5.64049 5.18378 6.05298 4.68283 6.59592 4.36375C7.13885 4.04466 7.7772 3.92802 8.39789 4.03448C9.01859 4.14095 9.58157 4.46365 9.98714 4.94543C10.3926 5.42711 10.6146 6.03673 10.6137 6.66635C10.6134 7.68659 9.85703 8.36034 9.31687 8.72045C9.02645 8.91406 8.74077 9.05642 8.53033 9.14995C8.42416 9.19714 8.33476 9.23295 8.27034 9.25749C8.23807 9.26978 8.21191 9.2793 8.19287 9.28608L8.16972 9.29418L8.16234 9.2967L8.15974 9.29758L8.15872 9.29792C8.15852 9.29799 8.15789 9.2982 7.94707 8.66575L8.15789 9.2982C7.80859 9.41463 7.43105 9.22586 7.31461 8.87656C7.19826 8.5275 7.3867 8.15022 7.73555 8.03352L7.7347 8.03381C7.73477 8.03379 7.73483 8.03377 7.73555 8.03352L7.74619 8.02979C7.75645 8.02614 7.77326 8.02004 7.79568 8.0115C7.84063 7.99438 7.90748 7.96768 7.98881 7.93154C8.15337 7.8584 8.36769 7.75076 8.57727 7.61104C9.037 7.30456 9.2804 6.9785 9.2804 6.66575L9.2804 6.66475C9.28087 6.34987 9.16989 6.04499 8.9671 5.8041C8.76432 5.56321 8.48283 5.40186 8.17248 5.34862Z" fill="#C7C5C5"/>
                </g>
                <defs>
                <clipPath id="clip0_1404_7231">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
              </svg>
              How to search
              <svg class="close-btn cursor-btn" onclick="openCloseHelp('close')"
                 width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 3.5L3.5 12.5" stroke="#C7C5C5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.5 12.5L3.5 3.5" stroke="#C7C5C5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
              You can search by entering an address or latitude/longitude, we support latitude/
              longitude in all formats!
              <br/>
              You can also locate a point on the map by clicking on the icon on the right.
          </div>
          <button id="search-btn" class="cursor-btn" onclick="search()" disabled> Search </button>
          <div id="copyright">
            <a href="https://www.openstreetmap.org/copyright" target="_blank">&#169; OpenStreetMap</a> /
            <a href="https://opendatacommons.org/licenses/odbl/" target="_blank">Open Database Licence version 1.0 (the ODbL) </a>
          </div>
        </div>

        <div id="result-section">
          <span class="label-name">Search results</span>
          <div id="result-display">
          </div>
          <button class="cursor-btn" id="place-marker-btn" onclick="placeMarker()">Mark on the map</button>
        </div>
      </div>

      <div style="display:none"> 
        <div id="no-result">No result</div>
        <div class="item cursor-btn" id="item-temp">
          <div class="left-part">
            <div class="display-name">Display Name</div>
            <div class="latlng-display">Lat,Lng</div>
          </div>
          <div class="right-part">
            <label class="radio-outside">
              <input type="radio" name="radio" onclick="selectItem(this)">
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div id="delete-marker-div" >
          <span class="cursor-btn" onclick="deletePlacedMarker()">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1442_6383)">
              <path d="M3.96457 1.60686H3.85742C3.91635 1.60686 3.96457 1.55865 3.96457 1.49972V1.60686H8.03599V1.49972C8.03599 1.55865 8.08421 1.60686 8.14314 1.60686H8.03599V2.57115H9.00028V1.49972C9.00028 1.02695 8.61591 0.642578 8.14314 0.642578H3.85742C3.38465 0.642578 3.00028 1.02695 3.00028 1.49972V2.57115H3.96457V1.60686ZM10.7146 2.57115H1.28599C1.04894 2.57115 0.857422 2.76267 0.857422 2.99972V3.42829C0.857422 3.48722 0.905636 3.53544 0.964565 3.53544H1.77349L2.1043 10.5399C2.12573 10.9966 2.5034 11.3569 2.9601 11.3569H9.04046C9.49849 11.3569 9.87483 10.9979 9.89626 10.5399L10.2271 3.53544H11.036C11.0949 3.53544 11.1431 3.48722 11.1431 3.42829V2.99972C11.1431 2.76267 10.9516 2.57115 10.7146 2.57115ZM8.93733 10.3926H3.06323L2.73912 3.53544H9.26144L8.93733 10.3926Z" fill="#6F6F6F"/>
              </g>
              <defs>
              <clipPath id="clip0_1442_6383">
              <rect width="12" height="12" fill="white"/>
              </clipPath>
              </defs>
            </svg>
            Delete select marker
          </span>
        </div>
        </div>
    </div>
  </div>
  
  <script src='https://unpkg.com/@turf/turf@6/turf.min.js'></script>
  <script src="https://unpkg.com/validator@latest/validator.min.js"></script>
  <script>

  let reearth
  let expanded = false
  let offsetHeight = 207
  let selectedLocationId
  let markerLayerId
  let isPlaceMarkerIcon = false
  let placedIconLayerId
  let placeIconLayerValue
  let pointColor, pointOutlineColor, lineColor, polygonColor, outlineColor = "#FFFFFF00"
  let pointSize = 5
  let pointOutlineWidth = 1
  let outlineWidth = 1
  let lineWidth = 1
  let resultLang = 'en'
  let markStyle 
  let settings

  let layerGeojsonId
  let placeMarkerBtn = document.getElementById("place-marker-btn")
  let resultSectionElm = document.getElementById("result-section")
  let resultDisplayElm = document.getElementById("result-display")
  let deleteMarkerBtnElm = document.getElementById("delete-marker-div")
  let noResultElm = document.getElementById("no-result")
  let containerElm = document.getElementById("container")
  let searchInputElm = document.getElementById("search-input")
  let searchBtnElm = document.getElementById("search-btn")

  function openClosePlugin() {
    expanded = !expanded
    if(expanded) {
      document.getElementById("wrapper").style.height = "auto"
      document.getElementById("content").style.height = "auto"
    } else {
      offsetHeight = document.getElementById("wrapper").offsetHeight
      document.getElementById("wrapper").style.height = "44px"
    }
    parent.postMessage({ type: "resize", expanded, height: offsetHeight }, "*");
  }

  function resizePlugin() {
    parent.postMessage({ type: "resize", expanded, height: document.getElementById("wrapper").offsetHeight }, "*");
  }

  function openCloseHelp(status) {
    if (status == "open") {
      document.getElementById("help-content").style.display = "block"
    } else if (status == "close") {
      document.getElementById("help-content").style.display = "none"
    }
    resizePlugin()
  }

  window.addEventListener("message", function (e) {
    if (e.source !== parent) return;
    reearth = e.source.reearth

    if(e.data.type === 'mousedata' ) {
      if(isPlaceMarkerIcon) {
        let selectedLat = e.data.payload.lat
        let selectedLng = e.data.payload.lng
        let layerName = selectedLat + "," + selectedLng
        if(!placedIconLayerId) {
          placedIconLayerId = createMarkerLayer(selectedLat, selectedLng, layerName, "image", null)
        } else {
          reearth.layers.overrideProperty(placedIconLayerId, {
            default: {
              location: {
                lat: selectedLat,
                lng: selectedLng
              },
              labelText: layerName
            },
          });
          reearth.layers.show(placedIconLayerId)
        }
        placeIconLayerValue = layerName
        //Reverse status
        placeMarkerIcon()
        searchInputElm.value = selectedLat + ", " + selectedLng
      }
    }

    if(e.data.property && e.data.property.hasOwnProperty("symbolStyle")){
      let symbolStyle = e.data.property.symbolStyle

      if(symbolStyle.hasOwnProperty("pointColor")) {
        pointColor = symbolStyle.pointColor
      } 

      if(symbolStyle.hasOwnProperty("pointSize")) {
        pointSize = symbolStyle.pointSize
      } 

      if(symbolStyle.hasOwnProperty("pointOutlineColor")) {
        pointOutlineColor = symbolStyle.pointOutlineColor
      } 

      if(symbolStyle.hasOwnProperty("pointOutlineWidth")) {
        pointOutlineWidth = symbolStyle.pointOutlineWidth
      } 

      if(symbolStyle.hasOwnProperty("lineColor")) {
        lineColor = symbolStyle.lineColor
      } 

      if(symbolStyle.hasOwnProperty("lineWidth")) {
        lineWidth = symbolStyle.lineWidth
      } 

      if(symbolStyle.hasOwnProperty("polygonColor")) {
        polygonColor = symbolStyle.polygonColor
      } 

      if(symbolStyle.hasOwnProperty("outlineColor")) {
        outlineColor = symbolStyle.outlineColor
      } 

      if(symbolStyle.hasOwnProperty("outlineWidth")) {
        outlineWidth = symbolStyle.outlineWidth
      } 

      if(symbolStyle.hasOwnProperty("outlineWidth")) {
        outlineWidth = symbolStyle.outlineWidth
      } 

    }  
   
    if(e.data.property && e.data.property.hasOwnProperty("setting")){
      settings = e.data.property.setting
      if(settings.hasOwnProperty("language")) {
        resultLang = settings.language
      } 

      if(settings.hasOwnProperty("markerType")) {
        markStyle = settings.markerType == "icon" ? "image" : settings.markerType
      } 
    }

  })

  function showGeojson(geojsonData, cameraHeight, centerPoint){
    if(layerGeojsonId) {
      // refresh
      reearth.layers.overrideProperty(layerGeojsonId, {
        default: {
          url: [],
        },
      });

      // override
      reearth.layers.overrideProperty(layerGeojsonId, {
        default: {
          url: geojsonData,
        },
      });
    } else {
      layerGeojsonId = reearth.layers.add({
        extensionId: "resource",
        isVisible: true,
        title: "geojson-data",
        property: {
          default: {
            url: geojsonData,
            type: "geojson",
            clampToGround: true
          },
          text: "Marker infobox",
        },
      })
    }
    
    reearth.camera.flyTo({
      lat: parseFloat(centerPoint[0]),           
      lng: parseFloat(centerPoint[1]),  
      height: cameraHeight
    }, {
      duration: 2
    });
  }

  searchInputElm.addEventListener('input', () => {
    if(searchInputElm.value != "") {
      searchBtnElm.disabled = false
      searchBtnElm.style.backgroundColor = "#0F62FE"
      searchBtnElm.style.color = "#FFFFFF"
    } else {
      searchBtnElm.disabled = true
      searchBtnElm.style.backgroundColor = "#262626"
      searchBtnElm.style.color = "#525252"
    }
  });

  //Convert dms to decimal degrees
  function getDMS2DD(str) {
    let value = str.split(/[°']/)
    //let dd = days + minutes/60 + seconds/(60*60);
    let dd = parseFloat(value[0]) + parseFloat(value[1])/60 + parseFloat(value[2])/(60*60);
    return dd
  }

  // Latitude must be a number between -90 and 90
  // Longitude must a number between -180 and 180
  // Valid format : lat, lng
  // 35.878726, 139.942835
  // 35.878726 139.942835
  // 35.878726N, 139.942835E
  // 35°52'43.4136", 139°56'34.206"
  function checkIfValidlatitudeAndlongitude(str) {
    let convertedLat, convertedLng
    let arr = []
    //Check valid DMS(degrees, minutes, and seconds) latitude-longitude 
    if(validator.isLatLong(str, {checkDMS: true})) {
      arr = str.split(",")
      convertedLat = getDMS2DD(arr[0])
      convertedLng = getDMS2DD(arr[1])
      return [convertedLat, convertedLng]
    } else {
      arr = str.split(/[ ,]+/)
      let tempLat = arr[0]
      let tempLng = arr[1]
      if(arr.length == 2) {
        arr.map((obj,index) => {
          let direction = obj.slice(-1)
          if(direction == "S" || direction == "W") {
            arr[index] = "-" + obj.slice(0, -1);
          } else if (direction == "N" || direction == "E"){
            arr[index] = obj.slice(0, -1);
          }
        })
        if ((isFinite(arr[1]) && Math.abs(arr[1]) <= 180) && 
        (isFinite(arr[0]) && Math.abs(arr[0]) <= 90)){
          return [arr[0], arr[1]]
        } else {
          return false
        }
      } else { 
        return false
      }
    }
  }

  function search() {
    searchBtnElm.innerHTML = "Searching..."
    let keyword = searchInputElm.value
    let latLngValue = checkIfValidlatitudeAndlongitude(keyword)
    if (latLngValue == false) {
      searchByLocationName()
    } else {    
      searchByLatLng(latLngValue[0], latLngValue[1])
    }
  }

  function searchByLatLng(latitude, longitude) {
    //Reverse
    let apiUrl = 'https://nominatim.openstreetmap.org/reverse?'
      +'format=geojson'
      +'&accept-language=' + resultLang
      +'&lat='+ parseFloat(latitude) 
      +'&lon=' + parseFloat(longitude)
    let centroid
    fetch(apiUrl).then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Could not reach the API" + response.statusText);
      }
    }).then(function(data) {
      if(data.error) {
        console.log(data.error)
        displayNoResult()
      } else {
        centroid = data.features[0].geometry.coordinates.reverse()
        let osmId = data.features[0].properties["osm_id"]
        let osmType = data.features[0].properties["osm_type"].charAt(0).toUpperCase()
        let detailAPI = "https://nominatim.openstreetmap.org/lookup?osm_ids=" + osmType + osmId 
          + "&format=geojson&polygon_geojson=1"
          +'&accept-language=' + resultLang
        return fetch(detailAPI);
      }
    }).then(response => {
      return response.json();
    }).then(function(data) {
      searchBtnElm.innerHTML = "Search"
      data.features?.map((location, index) => {
        resultDisplayElm.innerHTML = ""
        
        let itemElm = document.getElementById("item-temp").cloneNode(true)
        itemElm.setAttribute("id","item-" + index)
        itemElm.setAttribute("data-infor",JSON.stringify(location))
        itemElm.setAttribute("data-searchby", searchInputElm.value)
        itemElm.querySelector(".display-name").innerText = location.properties["display_name"]
        itemElm.querySelector(".latlng-display").innerText = centroid
        resultDisplayElm.appendChild(itemElm)  
        
        if(data.features.length == 1) {
          selectedLocationId = itemElm.getAttribute("id")
          itemElm.querySelector(".right-part").style.display = "none"
          itemElm.setAttribute("onclick","selectOne()")
          selectOne()
        }
      })
      containerElm.appendChild(deleteMarkerBtnElm)
      placeMarkerBtn.style.display = "block"
      placeMarkerBtn.style.borderColor="#0F62FE"
      placeMarkerBtn.style.color="#0F62FE"
      resultSectionElm.style.display = "block"
      resizePlugin()
      
    }).catch(function(error) {
      console.log(error)
      displayNoResult()
    });
  }

  function displayNoResult() {
    searchBtnElm.innerHTML = "Search"
    //CSS - No result
    resultSectionElm.style.display = "block"
    resultDisplayElm.innerHTML = ""
    resultDisplayElm.appendChild(noResultElm)
    placeMarkerBtn.style.display = "none"
    resizePlugin()
  }

  function searchByLocationName() {
    let addressElm = document.getElementById("search-input")
    let keyword = addressElm.value.replace(/ |,/g, '+');
    let params = "?q=" + keyword + "&addressdetails=1&format=geojson"+'&accept-language=' + resultLang
    let apiUrl = "https://nominatim.openstreetmap.org/search" + params + "&polygon_geojson=1"
    let getCentroidPoint = "https://nominatim.openstreetmap.org/search" + params + "&polygon_geojson=0"
    let centroid = []
    let centroidArr = []

    //Get center point and then get area data
    fetch(getCentroidPoint)
    .then(response => {
      return response.json();
    })
    .then(centroidData => {
      centroidData.features.map(obj => {
        centroid.push(obj.geometry.coordinates)
        centroidArr.push({
          placeId: obj.properties["place_id"],
          centroid: obj.geometry.coordinates})
      })
      return fetch(apiUrl);
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      searchBtnElm.innerHTML = "Search"
      let locationListElm = document.getElementById("result-display")
      locationListElm.innerHTML = ""
      if(data.features.length == 0) {
        resultDisplayElm.appendChild(noResultElm)
        placeMarkerBtn.style.display = "none"
      } else {
        placeMarkerBtn.style.display = "block"
        containerElm.appendChild(deleteMarkerBtnElm)
        data.features?.map((location, index) => {
          let itemElm = document.getElementById("item-temp").cloneNode(true)
          itemElm.setAttribute("id","item-" + index)
          itemElm.setAttribute("data-infor",JSON.stringify(location))
          itemElm.querySelector(".display-name").innerText = location.properties["display_name"]

          //Handle Lat Lng
          let geometryType = location.geometry.type   
          let latLng = centroidArr.find(obj => obj.placeId == location.properties["place_id"]).centroid
          itemElm.querySelector(".latlng-display").innerText = latLng.reverse()
          locationListElm.appendChild(itemElm)  
          selectedLocationId = "item-0" //Default

          if(data.features.length == 1) {
            selectedLocationId = itemElm.getAttribute("id")
            itemElm.querySelector(".right-part").style.display = "none"
            itemElm.setAttribute("onclick","selectOne()")
            enableMarkOnTheMapBtn()
          } else {
            disableMarkOnTheMapBtn()
          }
        })
      }
      resultSectionElm.style.display = "block"
      resizePlugin()
    })
    .catch(error => {
      //CSS - No result
      resultSectionElm.style.display = "block"
      resultDisplayElm.innerHTML = ""
      resultDisplayElm.appendChild(noResultElm)
      placeMarkerBtn.style.display = "none"
      resizePlugin()
    });
  }

  function enableMarkOnTheMapBtn() {
    placeMarkerBtn.disabled = false
    placeMarkerBtn.style.borderColor="#0F62FE"
    placeMarkerBtn.style.color="#0F62FE"
  }

  function disableMarkOnTheMapBtn() {
    placeMarkerBtn.disabled = true
    placeMarkerBtn.style.borderColor="#727070"
    placeMarkerBtn.style.color="#727070"
  }
    
  let markerArray = []
  function placeMarker() {
    let itemElm = document.getElementById(selectedLocationId)
    let itemInfor = JSON.parse(itemElm.getAttribute("data-infor"))
    let placeId = itemInfor.properties["place_id"]
    let name = itemInfor.properties["name"] != "" ? itemInfor.properties["name"] : itemInfor.properties["display_name"]
    let geometryType = itemInfor.geometry.type

    //Check to hide the placed marker icon and then mark on the map
    if(itemElm.hasAttribute("data-searchby")) {
      let searchByValue = itemElm.getAttribute("data-searchby")
      let arr1 = searchByValue.split(",")
      arr1.map((obj,id)=> {
        arr1[id] = parseFloat(obj)
      })
      if(placeIconLayerValue) {
        let arr2 = placeIconLayerValue.split(",")
        arr2.map((obj,id)=> {
          arr2[id] = parseFloat(obj)
        })
        if(arr1[0] == arr2[0] && arr1[1] == arr2[1]){
        reearth.layers.hide(placedIconLayerId)
        }
      }
    }

    //Check exist the mark layer id of location
    let found = markerArray.some(obj => obj.placeId == placeId)
    if(!found) {
      let point = itemElm.querySelector(".left-part").querySelector(".latlng-display").innerText.split(',')
      let layerId = createMarkerLayer(point[0], point[1], name, markStyle, settings)
      reearth.camera.flyTo({
        lng: parseFloat(point[1]),
        lat: parseFloat(point[0]),
        height: 2000
      }, {
        duration: 2
      });
      markerArray.push({placeId: placeId, markerLayerId: layerId, polygonLayerId: layerGeojsonId})
      layerGeojsonId = null
    } else {
      let findExistLayer = markerArray.find(obj => obj.placeId == placeId)
      reearth.layers.overrideProperty(findExistLayer.markerLayerId, {
        default: {
          style: markStyle,
          image: settings?.imageUrl ?? undefined,
          imageSize: settings?.imageScale ?? 1,
          pointColor: settings?.pointColor ?? "#FFFFFF",
          pointSize: settings?.pointSize ?? 10
        },
      });

      reearth.layers.show(findExistLayer.markerLayerId)
      reearth.layers.show(findExistLayer.polygonLayerId)
    }
  }

  function createMarkerLayer(latitude, longitude, layerName, markerType , markerSetting) {
    return reearth.layers.add({
      extensionId: 'marker',
      isVisible: true,
      title: 'place-marker',
      type: 'marker',
      property: {
        default: {
          location: {
            lat: latitude,
            lng: longitude
          },
          label: true,
          labelText: layerName,
          labelTypography:{
            fontSize: 16
          },
          style: markerType,
          image: markerSetting?.imageUrl ?? undefined,
          imageSize: markerSetting?.imageScale ?? 1,
          pointColor: markerSetting?.pointColor ?? "#FFFFFF",
          pointSize: markerSetting?.pointSize ?? 10
        }
      },
      clampToGround: true
    })
  }

  function placeMarkerIcon() {
    let iconElm = document.getElementById("place-marker-icon")
    isPlaceMarkerIcon = !isPlaceMarkerIcon
    searchBtnElm.disabled = false
    searchBtnElm.style.backgroundColor = "#0F62FE"
    searchBtnElm.style.color = "#FFFFFF"
  }

  function deletePlacedMarker() {
    if(reearth.layers.selected) {
      let selectedLayer = reearth.layers.selected.id
      let polygonLayer = markerArray.find(obj => obj.markerLayerId == selectedLayer)?.polygonLayerId
      reearth.layers.hide(selectedLayer)
      if(polygonLayer) {
        reearth.layers.hide(polygonLayer)
      }
    }
  }

  function selectOne(){
    let item = document.getElementById("item-0")
    placeMarkerBtn.disabled = false
    settingGeojsonData(item)
  }

  function cameraHeightByArea(polygon) {
    let area = turf.area(polygon)
    let cameraHeight = 500
    if(area<40000) {
      cameraHeight = 1500
    } else if (area<800000) {
      cameraHeight = 5000
    } else if (area<4000000000) {
      cameraHeight = 130000
    } else {
      cameraHeight = 2000000
    }
    return cameraHeight
  }

  function settingGeojsonData(item){
    let locationData = JSON.parse(item.getAttribute("data-infor"))
    let geojsonData, cameraHeight
    let geometryType = locationData.geometry.type  
    switch(geometryType) {
      case 'Point': 
        let buffered = turf.buffer(locationData, pointSize, {units: 'meters'});
        buffered.properties["fill"] = pointColor
        buffered.properties["stroke-width"] = 0
        let pointOutline = turf.lineString(turf.getCoords(buffered)[0])
        pointOutline.properties["stroke"]= pointOutlineColor
        pointOutline.properties["stroke-width"]= pointOutlineWidth
        geojsonData = turf.featureCollection([
          buffered,
          pointOutline
        ]);
        cameraHeight = 500
        break;
      case 'Polygon':
        //Polygon
        locationData.properties["fill"] = polygonColor
        locationData.properties["stroke-width"] = 0

        //Convert polyton to linestring for making outline
        let linestring = turf.lineString(turf.getCoords(locationData)[0])
        linestring.properties["stroke"]= outlineColor
        linestring.properties["stroke-width"]= outlineWidth
        let collection = turf.featureCollection([
          locationData,
          linestring
        ]);
        geojsonData = collection
        cameraHeight = cameraHeightByArea(locationData)
        break;
      case 'LineString':
        locationData.properties["stroke"]= lineColor
        locationData.properties["stroke-width"]= lineWidth
        geojsonData = locationData
        cameraHeight = 1000
        break;
      case 'MultiPolygon':
        let coords = []
        turf.getCoords(locationData).map(obj => {
          coords.push(obj[0])
        })
        //Convert multiPolygon to multiLinestring
        let multiPolygonOutline = turf.multiLineString(coords)
        multiPolygonOutline.properties["stroke"]= outlineColor
        multiPolygonOutline.properties["stroke-width"]= outlineWidth
        locationData.properties["fill"] = polygonColor
        locationData.properties["stroke-width"] = 0
        geojsonData = turf.featureCollection([
          locationData,
          multiPolygonOutline
        ]);
        cameraHeight = cameraHeightByArea(locationData)
        break;
      default:
        cameraHeight = 25000
        geojsonData = locationData
    }
    let pointFocus = item.querySelector(".left-part").querySelector(".latlng-display").innerText.split(',')
    showGeojson(geojsonData, cameraHeight, pointFocus)
  }

  
  function selectItem(item) {
    enableMarkOnTheMapBtn()
    let selectedItem = item.closest(".item")
    selectedLocationId = selectedItem.getAttribute("id")
    document.querySelectorAll(".item")?.forEach((obj) => {
      if(obj != selectedItem) {
        obj.style.borderColor = "#262626"
      }
    })
    selectedItem.style.borderColor = "#0F62FE"
    
    settingGeojsonData(selectedItem)
  }

  </script>
`,{width: 44, height: 44});

reearth.ui.postMessage({
  type: "initWidget",
  reearth: reearth
});

reearth.on("message", (msg) => {
  if (msg.type === "resize") {
    reearth.ui.resize?.(
      msg.expanded ? 312 : 44, 
      msg.expanded ? msg.height : 44, 
      msg.expanded ? undefined : true);
  } else if (msg.type === "initWidget") {
    reearth.ui.postMessage({
      type: "initWidget"
    });
  }
});

reearth.on("click", (mousedata) => {
  reearth.ui.postMessage(
    {
      type: "mousedata",
      payload: mousedata,
    },
    "*"
  );
});

reearth.on("update", send);
send();

function send() {
  reearth.ui.postMessage({
    type: "updateWidget",
    property: reearth.widget.property,
  });
}