<template>
	<div class="wrapper__navDesc" :class="{'black': isBlack}">
        <div class="inner">
            <div class="logo" @click="$router.push({name: 'index'})">
                <svg width="41" height="31" viewBox="0 0 41 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#sdqcvxzca1451fsa)">
                        <path d="M2.34302 14.3655C15.6583 -1.42681 28.3683 0.911187 38.6573 14.9504C33.0084 23.7242 17.8371 35.8906 2.34302 14.3655Z" fill="#469BFC"/>
                        <path d="M39.583 14.1552C39.2377 13.6709 31.0092 2.29639 20.4999 2.29639C9.99065 2.29639 1.76179 13.6709 1.41682 14.1547C1.08974 14.6142 1.08974 15.2374 1.41682 15.6968C1.76179 16.1812 9.99065 27.5556 20.4999 27.5556C31.0092 27.5556 39.2377 16.1811 39.583 15.6972C39.9105 15.2378 39.9105 14.6142 39.583 14.1552ZM20.4999 24.9426C12.7587 24.9426 6.05403 17.3932 4.06929 14.9251C6.05146 12.4549 12.7421 4.9094 20.4999 4.9094C28.2407 4.9094 34.945 12.4576 36.9305 14.9269C34.9484 17.397 28.2577 24.9426 20.4999 24.9426Z" fill="#8EC3FF"/>
                        <g clip-path="url(#zxxxaxxzddasd1s2)">
                            <path d="M23.9772 14.0453H23.7718V13.2076C23.7718 11.6583 22.3606 10.3641 20.5967 10.3365C20.5485 10.3357 20.4522 10.3357 20.4041 10.3365C18.6402 10.3641 17.229 11.6583 17.229 13.2076V14.0453H17.0236C16.707 14.0453 16.4487 14.3299 16.4487 14.6814V18.8827C16.4487 19.2338 16.707 19.5211 17.0236 19.5211H23.9772C24.2938 19.5211 24.552 19.2338 24.552 18.8827V14.6814C24.552 14.3299 24.2938 14.0453 23.9772 14.0453ZM21.1518 16.7778V18.0473C21.1518 18.1927 21.0122 18.3157 20.8452 18.3157H20.1556C19.9886 18.3157 19.8489 18.1927 19.8489 18.0473V16.7778C19.687 16.6389 19.5927 16.4469 19.5927 16.2344C19.5927 15.8318 19.9499 15.4859 20.4041 15.4699C20.4522 15.4682 20.5486 15.4682 20.5968 15.4699C21.0509 15.4859 21.4081 15.8318 21.4081 16.2344C21.4081 16.4469 21.3138 16.6389 21.1518 16.7778ZM22.4178 14.0453H20.5967H20.4041H18.583V13.2076C18.583 12.2848 19.4439 11.5217 20.5004 11.5217C21.5569 11.5217 22.4178 12.2848 22.4178 13.2076V14.0453H22.4178Z" fill="white"/>
                        </g>
                    </g>
                    <defs>
                        <clipPath id="sdqcvxzca1451fsa">
                            <rect width="41" height="31" fill="white"/>
                        </clipPath>
                        <clipPath id="zxxxaxxzddasd1s2">
                            <rect width="10.5429" height="9.18519" fill="white" transform="translate(15.2292 10.3359)"/>
                        </clipPath>
                    </defs>
                </svg>
                <span>FRIENDSONLY</span>
            </div>
            <div class="search"></div>
            <div class="menu">
                <div class="menuItem" @click="goLink('publication')">
                    <svg width="47" height="35" viewBox="0 0 47 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="43" height="31" rx="8" stroke="#469BFC" stroke-width="2.2"/>
                        <path d="M28.4706 15.9524H25.0476V12.5294C25.0476 11.6884 24.3413 11 23.5 11C22.6587 11 21.9524 11.6884 21.9524 12.5294V15.9524H18.5294C17.6884 15.9524 17 16.6587 17 17.5C17 18.3413 17.6884 19.0476 18.5294 19.0476H21.9524V22.4706C21.9524 23.3116 22.6587 24 23.5 24C24.3413 24 25.0476 23.3116 25.0476 22.4706V19.0476H28.4706C29.3116 19.0476 30 18.3413 30 17.5C30 16.6587 29.3116 15.9524 28.4706 15.9524Z" fill="#469BFC"/>
                    </svg>
                </div>
                <div class="menuItem" :class="{active: currentPage === 'index'}" @click="goLink('main')">
                    <svg class="colorBg" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#121e12e2e1e2121esgvv)">
                            <path d="M24.3254 10.8738C24.3249 10.8732 24.3243 10.8727 24.3237 10.8721L14.1257 0.674438C13.691 0.239563 13.1131 0 12.4984 0C11.8836 0 11.3057 0.239372 10.8708 0.674248L0.678134 10.8667C0.674701 10.8702 0.671267 10.8738 0.667834 10.8772C-0.224805 11.775 -0.223279 13.2317 0.672221 14.1272C1.08135 14.5365 1.6217 14.7736 2.19944 14.7984C2.2229 14.8006 2.24655 14.8018 2.27039 14.8018H2.67684V22.3066C2.67684 23.7917 3.88515 25 5.37059 25H9.36038C9.76474 25 10.0928 24.6721 10.0928 24.2676V18.3838C10.0928 17.7061 10.644 17.1549 11.3217 17.1549H13.675C14.3527 17.1549 14.9039 17.7061 14.9039 18.3838V24.2676C14.9039 24.6721 15.2318 25 15.6363 25H19.6261C21.1116 25 22.3199 23.7917 22.3199 22.3066V14.8018H22.6968C23.3113 14.8018 23.8892 14.5624 24.3243 14.1275C25.2208 13.2305 25.2211 11.7714 24.3254 10.8738Z" fill="#D9D9D9"/>
                        </g>
                        <defs>
                            <clipPath id="121e12e2e1e2121esgvv">
                                <rect width="25" height="25" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div class="menuItem chats" :class="{active: currentPage === 'chats' || currentPage === 'openChat'}" v-if="getUser" @click="$router.push({name: 'chats'})">
                    <div class="icon">
                        <div class="unreadMessages" v-if="getMessagesCount() > 0">{{getMessagesCount()}}</div>
                        <svg class="colorBg" width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#zzxcxzcxzxczchj545hwrtje)">
                                <path d="M12.976 1C6.10919 1 0.54248 6.37262 0.54248 13C0.54248 14.8721 0.999541 16.637 1.7917 18.2161L0.801918 23.5911C0.675996 24.2749 1.26913 24.8754 1.95444 24.7578L7.57153 23.7943C9.20757 24.5589 11.0363 25 12.976 25C19.8429 25 25.4095 19.6274 25.4095 13C25.4095 6.37262 19.8428 1 12.976 1Z" fill="#D9D9D9"/>
                            </g>
                            <defs>
                                <clipPath id="zzxcxzcxzxczchj545hwrtje">
                                    <rect width="24.8671" height="25" fill="white" transform="translate(0.54248)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div class="menuItem" v-if="getUser" @mouseover="showMenu = true" @mouseleave="showMenu = false">
                    <span class="avatar">
                        <img ref="avatar" :class="{'noLoad':getUser.avatar === '/avatar.jpg'}" :src="getUser.avatar" style="opacity: 1;" alt="" v-if="getUser.avatar && getUser.avatar !== '/avatar.jpg'">
                        <div v-else class="avatar-none" :class="'bgColor-'+ getUser.id % 7" >
                            {{getFirstLetter(getUser)}}
                        </div>
                       <span class="openMenu" @click="showMenu = !showMenu">
                            <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M6.86079 0.816411L3.83608 3.85993C3.65047 4.04669 3.34953 4.04669 3.16392 3.85993L0.139208 0.816411C-0.0464034 0.629645 -0.0464034 0.326839 0.139208 0.140074C0.324819 -0.0466912 0.625755 -0.0466912 0.811366 0.140074L3.5 2.84542L6.18863 0.140074C6.37424 -0.0466913 6.67518 -0.0466913 6.86079 0.140074C7.0464 0.326839 7.0464 0.629645 6.86079 0.816411Z" fill="#292941"/>
                            </svg>
                       </span>
                    </span>
                </div>
                <button class="menuItem login"></button>
            </div>
            <div class="openMenuBlock" v-if="getUser" :class="{show: showMenu, right: isFullWidth}" @mouseover="showMenu = true" @mouseleave="showMenu = false">
                <div class="menuBlockItem" @click="goLink('profile'); showMenu = false">
                    <div class="svgWrap profile">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.92403 5.78041C6.72358 5.78041 7.41593 5.49559 7.98162 4.93365C8.54732 4.37179 8.83408 3.68433 8.83408 2.89012C8.83408 2.09618 8.54732 1.40862 7.98153 0.846582C7.41574 0.284818 6.72349 0 5.92403 0C5.12439 0 4.43223 0.284818 3.86653 0.846673C3.30084 1.40853 3.01398 2.09608 3.01398 2.89012C3.01398 3.68433 3.30084 4.37189 3.86663 4.93374C4.43241 5.4955 5.12467 5.78041 5.92403 5.78041Z" fill="white"/>
                            <path d="M11.0155 9.22735C10.9992 8.99352 10.9662 8.73846 10.9176 8.46911C10.8686 8.19775 10.8055 7.94122 10.7299 7.70676C10.6518 7.46442 10.5456 7.2251 10.4144 6.99576C10.2781 6.75773 10.1181 6.55046 9.93853 6.37989C9.75076 6.20146 9.52087 6.058 9.25503 5.95335C8.99011 5.84926 8.69653 5.79652 8.38248 5.79652C8.25914 5.79652 8.13987 5.84679 7.90951 5.99574C7.76774 6.08757 7.60192 6.19377 7.41682 6.31123C7.25855 6.41139 7.04415 6.50523 6.77932 6.59019C6.52095 6.67323 6.25861 6.71534 5.99968 6.71534C5.74076 6.71534 5.47851 6.67323 5.21986 6.59019C4.95531 6.50532 4.74091 6.41148 4.58282 6.31132C4.39948 6.19496 4.23356 6.08876 4.08967 5.99565C3.85959 5.84669 3.74022 5.79643 3.61689 5.79643C3.30275 5.79643 3.00926 5.84926 2.74443 5.95344C2.47877 6.05791 2.24879 6.20137 2.06084 6.37999C1.88137 6.55064 1.72126 6.75782 1.5852 6.99576C1.45403 7.2251 1.34784 7.46433 1.26968 7.70685C1.19418 7.94131 1.13104 8.19775 1.082 8.46911C1.03343 8.73809 1.00043 8.99325 0.984112 9.22762C0.968073 9.45723 0.959961 9.69554 0.959961 9.93623C0.959961 10.5626 1.16045 11.0697 1.5558 11.4437C1.94626 11.8128 2.46292 12 3.0912 12H8.90872C9.537 12 10.0535 11.8129 10.444 11.4437C10.8395 11.07 11.04 10.5628 11.04 9.93614C11.0399 9.69435 11.0317 9.45586 11.0155 9.22735Z" fill="white"/>
                        </svg>
                    </div>
                    <span>{{$t('followers.titleProfile')}}</span>
                </div>
                <div class="menuBlockItem" @click="goLink('followers'); showMenu = false">
                    <div class="svgWrap first">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#qwweqzasvc121fd1ddwas)">
                                <path d="M11.4449 6.72656C10.8615 7.20744 10.1144 7.4967 9.30104 7.4967C9.01953 7.4967 8.74594 7.46201 8.48438 7.39683C8.95211 8.10906 9.22467 8.96041 9.22467 9.87434V11.2166C9.22467 11.7187 9.04135 12.1785 8.73866 12.5336H11.794C12.5202 12.5336 13.1109 11.9429 13.1109 11.2166V9.87434C13.1109 8.56793 12.4498 7.41315 11.4449 6.72656Z" fill="white"/>
                                <path d="M4.6988 6.78051C6.16513 6.78051 7.35805 5.58759 7.35805 4.12126C7.35805 2.65484 6.16513 1.46191 4.6988 1.46191C3.23247 1.46191 2.03955 2.65484 2.03955 4.12126C2.03955 5.58759 3.23247 6.78051 4.6988 6.78051Z" fill="white"/>
                                <path d="M9.3007 6.78051C10.767 6.78051 11.96 5.58759 11.96 4.12126C11.96 2.65484 10.767 1.46191 9.3007 1.46191C8.59136 1.46191 7.94609 1.7411 7.46875 2.19531C7.84986 2.74193 8.07374 3.40586 8.07374 4.12126C8.07374 4.83657 7.84986 5.50049 7.46875 6.04711C7.94609 6.50132 8.59136 6.78051 9.3007 6.78051Z" fill="white"/>
                                <path d="M6.84247 6.72656C6.25911 7.20744 5.51201 7.4967 4.6986 7.4967C3.8852 7.4967 3.1381 7.20754 2.55464 6.72656C1.54971 7.41315 0.888672 8.56793 0.888672 9.87434V11.2166C0.888672 11.9429 1.4794 12.5336 2.20562 12.5336H7.1915C7.91772 12.5336 8.50844 11.9429 8.50844 11.2166V9.87434C8.50844 8.56793 7.8475 7.41315 6.84247 6.72656Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="qwweqzasvc121fd1ddwas">
                                    <rect width="12.2222" height="12.2222" fill="white" transform="translate(0.888672 0.888916)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <span>{{$t('followers.titleOne')}}</span>
                </div>
                <div class="menuBlockItem" @click="$router.push({name: 'menu'}); showMenu = false">
                    <div class="svgWrap third">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.4499 5.45771L12.4093 5.2315C12.3189 4.95448 12.2068 4.68427 12.0745 4.42398L12.6505 3.52794C12.7534 3.36784 12.7308 3.15764 12.5963 3.02316L10.9753 1.40212C10.8408 1.26763 10.6306 1.24501 10.4705 1.34789L9.57444 1.92394C9.31415 1.79163 9.04395 1.67956 8.76692 1.58907L8.54072 0.548528C8.50033 0.362605 8.33568 0.22998 8.14542 0.22998H5.853C5.66274 0.22998 5.49809 0.362605 5.45771 0.548528L5.2315 1.58907C4.95448 1.67956 4.68427 1.79163 4.42398 1.92394L3.52794 1.34789C3.36784 1.24501 3.15764 1.26763 3.02316 1.40212L1.40212 3.02316C1.26763 3.15764 1.24501 3.36784 1.34789 3.52794L1.92394 4.42398C1.79163 4.68427 1.67956 4.95448 1.58907 5.2315L0.548528 5.45771C0.362605 5.4982 0.22998 5.66274 0.22998 5.853V8.14542C0.22998 8.33568 0.362605 8.50023 0.548528 8.54072L1.58907 8.76692C1.67956 9.04395 1.79163 9.31415 1.92394 9.57444L1.34789 10.4705C1.24501 10.6306 1.26763 10.8408 1.40212 10.9753L3.02316 12.5963C3.15764 12.7308 3.36784 12.7534 3.52794 12.6505L4.42398 12.0745C4.68427 12.2068 4.95448 12.3189 5.2315 12.4093L5.45771 13.4499C5.49809 13.6358 5.66274 13.7684 5.853 13.7684H8.14542C8.33568 13.7684 8.50033 13.6358 8.54072 13.4499L8.76692 12.4093C9.04395 12.3189 9.31415 12.2068 9.57444 12.0745L10.4705 12.6505C10.6306 12.7534 10.8408 12.7309 10.9753 12.5963L12.5963 10.9753C12.7308 10.8408 12.7534 10.6306 12.6505 10.4705L12.0745 9.57444C12.2068 9.31415 12.3189 9.04395 12.4093 8.76692L13.4499 8.54072C13.6358 8.50023 13.7684 8.33568 13.7684 8.14542V5.853C13.7684 5.66274 13.6358 5.4982 13.4499 5.45771ZM9.42643 6.99921C9.42643 8.33754 8.33754 9.42643 6.99921 9.42643C5.66088 9.42643 4.57199 8.33754 4.57199 6.99921C4.57199 5.66088 5.66088 4.57199 6.99921 4.57199C8.33754 4.57199 9.42643 5.66088 9.42643 6.99921Z" fill="white"/>
                        </svg>
                    </div>
                    <span>{{$t('settings.settings')}}</span>
                </div>
                <div class="menuBlockItem" @click="$router.push({name: 'authorTools'}); showMenu = false">
                    <div class="svgWrap tools">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#d12d12sqweq)">
                                <path d="M3.94423 5.68945H1.32591C1.08556 5.68945 0.891229 5.88378 0.888672 6.12669V12.6725C0.888672 12.9154 1.08556 13.1097 1.32591 13.1097H3.94423C4.18714 13.1097 4.38147 12.9128 4.38147 12.6725V6.12669C4.38147 5.88378 4.18458 5.68945 3.94423 5.68945Z" fill="white"/>
                                <path d="M8.3085 0.890625H5.69017C5.44982 0.890625 5.25293 1.08495 5.25293 1.32531V12.6731C5.25293 12.916 5.44982 13.1103 5.69017 13.1103H8.3085C8.55141 13.1103 8.74574 12.9134 8.74574 12.6731V1.32786C8.74574 1.08495 8.54885 0.890625 8.3085 0.890625Z" fill="white"/>
                                <path d="M12.6737 4.38086H10.0554C9.81249 4.38086 9.61816 4.57519 9.61816 4.8181V12.673C9.61816 12.916 9.81505 13.1103 10.0554 13.1103H12.6737C12.9166 13.1103 13.111 12.9134 13.111 12.673V4.8181C13.111 4.57519 12.9141 4.38086 12.6737 4.38086Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="d12d12sqweq">
                                    <rect width="12.2222" height="12.2222" fill="white" transform="translate(0.888672 0.888672)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <span>{{$t('personalLinks.sideMenu.title')}}</span>
                </div>
                <div class="menuBlockItem" @click="$router.push({name: 'withdrawal'}); showMenu = false">
                    <div class="svgWrap five">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#zxccascsacsa21211d1d)">
                                <path d="M8.88574 7.87459C8.88574 8.42363 9.3324 8.87028 9.88141 8.87028H13.1108V6.87891H9.88143C9.33242 6.87893 8.88574 7.32558 8.88574 7.87459ZM10.4259 7.90384C10.4259 8.12552 10.2462 8.30522 10.0245 8.30522C9.80286 8.30522 9.62316 8.12552 9.62316 7.90384C9.62316 7.68217 9.80286 7.50247 10.0245 7.50247C10.2462 7.50249 10.4259 7.68219 10.4259 7.90384Z" fill="white"/>
                                <path d="M9.88153 9.641C8.90736 9.641 8.11482 8.84844 8.11482 7.87427C8.11482 6.90009 8.90738 6.10753 9.88153 6.10753H13.1109V4.7621C13.1109 3.852 12.3705 3.11157 11.4604 3.11157H2.5392C1.6291 3.11157 0.888672 3.852 0.888672 4.7621V10.9385C0.888672 11.8486 1.6291 12.589 2.5392 12.589H11.4604C12.3705 12.589 13.1109 11.8486 13.1109 10.9385V9.641H9.88153Z" fill="white"/>
                                <path d="M2.53883 2.34044C12.2361 2.34044 11.5411 2.33244 11.754 2.35831C11.4895 1.79892 10.9199 1.41089 10.2612 1.41089H2.53883C1.65263 1.41089 0.927629 2.113 0.890137 2.99012C1.32274 2.58729 1.90245 2.34044 2.53883 2.34044Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="zxccascsacsa21211d1d">
                                    <rect width="12.2222" height="12.2222" fill="white" transform="translate(0.888672 0.888916)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <span>{{$t('money.money')}}</span>
                </div>
                <div class="menuBlockItem" @click="$router.push({name: 'FAQ'}); showMenu = false">
                    <div class="svgWrap six">
                        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.90343 6.58872C2.90343 6.18524 3.03362 5.80009 3.29399 5.43329C3.56438 5.06648 3.85479 4.77304 4.16524 4.55296C4.47568 4.3237 4.76109 4.05777 5.02146 3.75516C5.29185 3.45254 5.42704 3.14993 5.42704 2.84732C5.42704 2.52636 5.30687 2.27877 5.06652 2.10454C4.82618 1.93031 4.4907 1.84319 4.06009 1.84319C3.21888 1.84319 2.62303 2.25126 2.27253 3.0674L0.5 2.13205C0.800429 1.45346 1.27611 0.930766 1.92704 0.563961C2.58798 0.187987 3.32403 0 4.13519 0C5.04649 0 5.83262 0.243008 6.49356 0.729024C7.16452 1.20587 7.5 1.86612 7.5 2.70977C7.5 3.09491 7.40987 3.45254 7.22961 3.78267C7.05937 4.11279 6.84907 4.39707 6.59871 4.63549C6.35837 4.86474 6.11302 5.08482 5.86266 5.29574C5.62232 5.49748 5.41202 5.70839 5.23176 5.92847C5.06152 6.14856 4.97639 6.36864 4.97639 6.58872H2.90343ZM4.8412 9.65612C4.59084 9.88537 4.29041 10 3.93991 10C3.58941 10 3.28898 9.88537 3.03863 9.65612C2.78827 9.42687 2.66309 9.15176 2.66309 8.83081C2.66309 8.50986 2.78827 8.23475 3.03863 8.0055C3.28898 7.77625 3.58941 7.66162 3.93991 7.66162C4.29041 7.66162 4.59084 7.77625 4.8412 8.0055C5.09156 8.23475 5.21674 8.50986 5.21674 8.83081C5.21674 9.15176 5.09156 9.42687 4.8412 9.65612Z" fill="white"/>
                        </svg>
                    </div>
                    <span>{{$t('same.helpAndSupport')}}</span>
                </div>
                <div class="menuBlockItem" @click="$router.push({name: 'howToEarn'}); showMenu = false">
                    <div class="svgWrap howToEarn">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9661 4.70779C12.881 4.44455 12.6475 4.25759 12.3713 4.2327L8.61913 3.892L7.13543 0.419253C7.02603 0.164745 6.77688 0 6.50005 0C6.22323 0 5.97408 0.164745 5.86468 0.419848L4.38098 3.892L0.628233 4.2327C0.3525 4.25819 0.119615 4.44455 0.0340186 4.70779C-0.0515776 4.97103 0.0274724 5.25975 0.236057 5.44176L3.07224 7.9291L2.23591 11.6131C2.17472 11.884 2.27985 12.164 2.5046 12.3264C2.62541 12.4137 2.76675 12.4582 2.90928 12.4582C3.03217 12.4582 3.15406 12.425 3.26346 12.3596L6.50005 10.4252L9.73545 12.3596C9.9722 12.502 10.2706 12.489 10.4949 12.3264C10.7198 12.1635 10.8248 11.8834 10.7636 11.6131L9.92727 7.9291L12.7635 5.44225C12.972 5.25975 13.0517 4.97152 12.9661 4.70779Z" fill="white"/>
                        </svg>
                    </div>
                    <span>{{$t('same.howToEarn')}}</span>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
// import {mapGetters, mapMutations} from 'vuex'
// import {
//     SET_AUTH_MODAL,
//     SET_CHATS_MODAL,
//     SET_CURRENT_PAGE, SET_FRIENDS_MODAL,
//     SET_NOTIFICATION_MODAL, SET_PUBLICATION_MODAL,
//     SET_UNREAD_MESSAGES,
//     SET_USER_NOTIFICATION
// } from "../store/types";

// export default {
    // data: () => ({
    //     unread_messages: 0,
    //     siteOfferShow: false,
    //     openedMenu: true,
    //     activePage: '',
    //     showMenu: false
    // }),
    // computed: {
    //     // ...mapGetters([
    //     //     'getUser',
    //     //     "getRouter",
    //     //     'getSocket',
    //     //     'getShowNotification',
    //     //     'getUnreadMessages',
    //     //     'getCurrentPage'
    //     // ]),
    //     isBlack() {
    //         console.log(this.currentPage)
    //         return this.currentPage === 'index' || this.currentPage === 'sharedVideo' || this.currentPage === 'howItWork' || this.currentPage === 'howToEarn'
    //     },
    //     isFullWidth() {
    //         return this.$store.state.pageWidth < 1150
    //     },
    //     currentPage() {
    //         return this.$route.name
    //     }
    // },
    // watch: {
    //     getCurrentPage: function() {
    //         console.log(this.$route.name, 'routerName')
    //         this.activePage = this.$route.name;
    //     }
    // },
	// mounted() {
    //     this.activePage = this.getCurrentPage.current;
    //     const checkWidth = () => {
    //         this.siteOfferShow = document.documentElement.clientWidth >= 1345;
    //     }
    //     checkWidth();
    //     window.addEventListener('resize', () => {
    //         checkWidth();
    //     })
		// this.getSocket.on(`private-App.User.${this.getUser.id}:Illuminate\\Notifications\\Events\\BroadcastNotificationCreated`,data => {
		// 	this.getUser.unread_notifications_count++;
		// })
		// this.getSocket.on(`auth-${this.getUser.id}:newMessage`, data => {
		// 	this.getUser.unread_messages++;
		// })
	// },
	// methods: {
	//     // ...mapMutations({
    //     //     setChatsModal: SET_CHATS_MODAL,
    //     //     setNotificationModal: SET_NOTIFICATION_MODAL,
    //     //     setUserNotification: SET_USER_NOTIFICATION,
    //     //     setCurrentPage: SET_CURRENT_PAGE,
    //     //     setPublicationModal: SET_PUBLICATION_MODAL,
    //     //     setAuthModal: SET_AUTH_MODAL,
    //     //     setFriendsModal: SET_FRIENDS_MODAL
    //     // }),
    //     accountName() {
	//         return this.getUser.username || this.getUser.name || this.getUser.id;
    //     },
	// 	getRouteName(){
	// 		return this.$router.currentRoute.path
	// 	},
	// 	getMessagesCount(){
    //         return Number(this.getUnreadMessages);
	// 	},
    //     goLink(param) {
	//         if (param === 'main') {
    //             if(this.getRouteName() !== '/'){
    //                 this.$router.push({name: 'index'});
    //             }
    //         } else if (param === 'followers') {
    //             this.setFriendsModal({show: true, type: 'My'});
    //         } else if (param === 'notification') {
    //             if(this.getRouteName() !== '/notifications' && this.getUser){
    //                 this.$router.push({name: 'notifications'});
    //             } else if (!this.getUser) {
    //                 this.setCurrentPage({...this.getCurrentPage, current: 'notifications'});
    //                 this.setAuthModal({show: true})
    //             }
    //         } else if (param === 'chats') {
    //             if(this.getRouteName() !== '/messages/chats' && this.getUser){
    //                 if (this.getShowNotification) {
    //                     this.setChatsModal({show: true, userData: this.getUser});
    //                 } else {
    //                     this.setNotificationModal({show: true});
    //                 }
    //             } else if (!this.getUser) {
    //                 this.setCurrentPage({...this.getCurrentPage, current: 'chats'});
    //                 this.setAuthModal({show: true})
    //             }
    //         } else if (param === 'profile') {
    //             if(this.getRouteName() !== `/${this.getUser.username}` && this.getUser){
    //                 this.$router.push({name: 'account', params: {username: this.getUser.username}});
    //             } else if (!this.getUser) {
    //                 this.setCurrentPage({...this.getCurrentPage, current: 'account'});
    //                 this.setAuthModal({show: true})
    //             }
    //         } else if (param === 'publication') {
    //             if (this.getUser) {
    //                 this.setPublicationModal({show: true});
    //             } else {
    //                 this.setAuthModal({show: true})
    //             }
    //         }
	//         this.$forceUpdate();
    //     },
	// 	routePush(name){
	// 		if(this.getRouteName() !== `/auth/login` && this.getRouteName() !== `/auth/register`){
	// 			this.$router.push({name: name, params:{login:'login'}});
	// 			this.$forceUpdate();
	// 		}
	// 	},
	// },
// }
</script>

<style>
.wrapper__navDesc{
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    height: 71px;
    z-index: 75;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
}
.wrapper__navDesc.black{
    background: #0F0F0F;
}
.wrapper__navDesc .inner{
    width: 100%;
    height: 100%;
    max-width: 940px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.wrapper__navDesc .logo{
    height: 100%;
    width: 190px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
}
.wrapper__navDesc .logo span{
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #292941;
}
.wrapper__navDesc.black .logo span{
    color: #fff;
}
.wrapper__navDesc .menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}
.wrapper__navDesc .menu .menuItem:nth-child(1) {
    margin-left: 0;
}
.wrapper__navDesc .menuItem{
    position: relative;
    width: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 42px;
    height: 100%;
}
.wrapper__navDesc .menuItem .icon{
    position: relative;
    width: 26px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.wrapper__navDesc.black .menuItem svg.colorBg,
.wrapper__navDesc.black .menuItem svg.colorBg path{
    fill: #383838;
}
.wrapper__navDesc.black .menuItem.active svg,
.wrapper__navDesc.black .menuItem.active svg path{
    fill: #fff;
}
.wrapper__navDesc .menuItem.active svg,
.wrapper__navDesc .menuItem.active svg path{
    fill: #4892F3;
}
.wrapper__navDesc .menuItem .unreadMessages{
    position: absolute;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 800;
    font-size: 9px;
    line-height: 11px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #FFFFFF;
    top: -3px;
    right: -4px;
    background: #FF301A;
    border-radius: 10px;
    padding: 2px;
}
.wrapper__navDesc .menuItem:last-child:not(.login) {
    margin-left: 12px;
    width: 77px;
    justify-content: flex-end;
}
.wrapper__navDesc .menuItem.login{
    background: #469BFC;
    border-radius: 13px;
    height: 47px;
    width: 151px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    outline: 0;
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
}
.wrapper__navDesc .menuItem .avatar{
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    display: flex;
}
.wrapper__navDesc .menuItem .avatar img,
.wrapper__navDesc .menuItem .avatar .avatar-none{
    width: 30px;
    height: 30px;
    object-fit: cover;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    overflow: hidden;
}
.wrapper__navDesc .menuItem .openMenu{
    height: 100%;
    min-height: 30px;
    width: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2px;
}
.wrapper__navDesc .inner{
    position: relative;
}
.wrapper__navDesc .openMenuBlock{
    position: absolute;
    right: -10%;
    top: 70px;
    background: #FCFCFC;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-top: 0;
    transition: .2s;
    opacity: 0;
    border-radius: 0 0 10px 10px;
    z-index: 50;
    pointer-events: none;
}
.wrapper__navDesc .openMenuBlock.right{
    right: -1px;
}
.wrapper__navDesc.black .openMenuBlock{
    background: #1C1C1C;
}
.wrapper__navDesc .openMenuBlock.show{
    opacity: 1;
    pointer-events: auto;
}
.wrapper__navDesc .openMenuBlock .menuBlockItem{
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
    cursor: pointer;
    padding: 12px 40px 12px 15px;
    align-items: center;
}
.wrapper__navDesc .openMenuBlock .menuBlockItem span{
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #292941;
}
.wrapper__navDesc.black .openMenuBlock .menuBlockItem span{
    color: #fff;
}
.wrapper__navDesc .openMenuBlock .menuBlockItem .svgWrap{
    height: 22px;
    width: 22px;
    border-radius: 7px;
    margin-right: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.wrapper__navDesc .openMenuBlock .menuBlockItem .svgWrap.profile{
    background: #FF4C4C;
}
.wrapper__navDesc .openMenuBlock .menuBlockItem .svgWrap.first{
    background: #40C6FF;
}
.wrapper__navDesc .openMenuBlock .menuBlockItem .svgWrap.third{
    background: #4892F3;
}
.wrapper__navDesc .openMenuBlock .menuBlockItem .svgWrap.five{
    background: #202020;
}
.wrapper__navDesc .openMenuBlock .menuBlockItem .svgWrap.six{
    background: #C672FF;
}
.wrapper__navDesc .openMenuBlock .menuBlockItem .svgWrap.tools{
    background: #3EAC5D;
}
.wrapper__navDesc .openMenuBlock .menuBlockItem .svgWrap.howToEarn{
    background: #FFC107;
}
</style>
