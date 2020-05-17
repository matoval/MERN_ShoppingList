import React from 'react'
import './DesktopHome.css'
import Login from './Login'
import Signup from './Signup'

function DesktopHome(props) {
  return (
    <div className="desktop-home">
      <div className="top-div">
        <div className="shopping-vector-div">
          <svg width="283" height="266" viewBox="0 0 283 266" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="changeColor" d="M239.275 233.55L206.497 208.834C217.552 197.353 227.607 181.006 237.222 162.523L270 187.238C256.902 203.096 245.807 218.659 239.275 233.55Z" fill="#6C63FF"/>
            <path d="M239.284 207.236C244.627 207.236 248.958 202.618 248.958 196.922C248.958 191.226 244.627 186.609 239.284 186.609C233.941 186.609 229.61 191.226 229.61 196.922C229.61 202.618 233.941 207.236 239.284 207.236Z" fill="white"/>
            <path d="M81.1597 120.767H77.5617C77.4352 120.767 77.3138 120.821 77.2244 120.916C77.1349 121.011 77.0847 121.141 77.0847 121.276V122.959C77.0847 123.026 77.097 123.092 77.121 123.154C77.145 123.215 77.1801 123.272 77.2244 123.319C77.2687 123.366 77.3213 123.403 77.3792 123.429C77.437 123.455 77.4991 123.468 77.5617 123.468H78.1579V125.99H80.5634V123.468H81.1597C81.2862 123.468 81.4075 123.414 81.497 123.319C81.5864 123.223 81.6367 123.094 81.6367 122.959V121.276C81.6367 121.141 81.5864 121.011 81.497 120.916C81.4075 120.821 81.2862 120.767 81.1597 120.767V120.767Z" fill="#E6E6E6"/>
            <path className="changeColor" d="M84.7634 136.176C82.5599 132.738 81.4334 128.645 81.5454 124.484C81.5474 124.388 81.5182 124.294 81.4626 124.218C81.4071 124.142 81.3288 124.09 81.2408 124.069V123.341H77.4409V124.058H77.3886C77.3374 124.059 77.2867 124.069 77.2394 124.09C77.1921 124.111 77.1492 124.142 77.113 124.181C77.0769 124.219 77.0482 124.265 77.0287 124.316C77.0091 124.366 76.9991 124.42 76.9992 124.475C76.9992 124.485 76.9995 124.495 77.0002 124.505C77.351 128.752 76.2763 132.993 73.9676 136.474C73.834 136.677 73.7658 136.92 73.7731 137.168L74.1886 150.87C74.1986 151.176 74.3189 151.466 74.5245 151.679C74.73 151.892 75.0049 152.013 75.2917 152.015H83.8866C84.1767 152.013 84.4544 151.89 84.6606 151.672C84.8668 151.454 84.9851 151.159 84.9904 150.85L85.1505 137.546C85.1552 137.058 85.0202 136.58 84.7634 136.176V136.176Z" fill="#6C63FF"/>
            <path opacity="0.2" d="M80.4096 121.316C80.4096 121.607 80.3012 121.886 80.1082 122.091C79.9152 122.297 79.6534 122.413 79.3805 122.413C79.1075 122.413 78.8458 122.297 78.6528 122.091C78.4598 121.886 78.3513 121.607 78.3513 121.316" fill="black"/>
            <path d="M83.0894 138.816H75.8338V143.972H83.0894V138.816Z" fill="white"/>
            <path d="M195.019 174.296H188.284C188.047 174.296 187.82 174.396 187.652 174.575C187.485 174.753 187.391 174.995 187.391 175.248V178.399C187.391 178.652 187.485 178.894 187.652 179.073C187.82 179.251 188.047 179.351 188.284 179.351H189.4V184.074H193.903V179.351H195.019C195.256 179.351 195.483 179.251 195.65 179.073C195.818 178.894 195.912 178.652 195.912 178.399V175.248C195.912 174.995 195.818 174.753 195.65 174.575C195.483 174.396 195.256 174.296 195.019 174.296V174.296Z" fill="#E6E6E6"/>
            <path className="changeColor" d="M201.765 203.139C197.64 196.705 195.531 189.044 195.741 181.253C195.744 181.073 195.69 180.898 195.586 180.756C195.482 180.615 195.335 180.516 195.171 180.476V179.114H188.058V180.457H187.96C187.864 180.457 187.769 180.478 187.68 180.517C187.592 180.556 187.511 180.614 187.444 180.686C187.376 180.758 187.322 180.844 187.286 180.939C187.249 181.033 187.231 181.134 187.231 181.236C187.231 181.255 187.231 181.274 187.233 181.293C187.793 189.621 185.901 197.089 181.556 203.698C181.306 204.078 181.178 204.534 181.192 204.997L181.97 230.647C181.988 231.219 182.214 231.761 182.598 232.16C182.983 232.56 183.498 232.785 184.035 232.79H200.123C200.666 232.785 201.186 232.554 201.572 232.147C201.958 231.74 202.18 231.188 202.189 230.609L202.489 205.706C202.498 204.792 202.245 203.896 201.765 203.139V203.139Z" fill="#6C63FF"/>
            <path opacity="0.2" d="M193.615 175.323C193.615 175.868 193.412 176.39 193.05 176.775C192.689 177.16 192.199 177.377 191.688 177.377C191.177 177.377 190.687 177.16 190.326 176.775C189.965 176.39 189.762 175.868 189.762 175.323" fill="black"/>
            <path d="M199.218 211.659H185.214C185.006 211.659 184.802 211.707 184.613 211.799C184.425 211.892 184.257 212.026 184.122 212.194C183.987 212.362 183.888 212.559 183.831 212.771C183.774 212.984 183.761 213.207 183.793 213.425L185.909 228.09H198.06L200.631 213.475C200.67 213.253 200.662 213.025 200.609 212.807C200.556 212.589 200.459 212.387 200.324 212.213C200.189 212.04 200.02 211.9 199.829 211.805C199.638 211.709 199.429 211.659 199.218 211.659V211.659Z" fill="white"/>
            <path className="changeColor" d="M175.802 233.509H135.655C138.462 217.331 137.816 197.795 135.655 176.785H175.802C173.699 197.795 173.07 217.331 175.802 233.509Z" fill="#6C63FF"/>
            <path d="M155.971 213.913C161.313 213.913 165.645 209.296 165.645 203.6C165.645 197.904 161.313 193.286 155.971 193.286C150.628 193.286 146.296 197.904 146.296 203.6C146.296 209.296 150.628 213.913 155.971 213.913Z" fill="white"/>
            <path d="M11.5895 54.9899L20.6022 54.1163L26.3379 39.2673L16.0961 33.1525L11.5895 54.9899Z" fill="#FFB8B8"/>
            <path d="M94.3033 95.7556C94.6029 94.9588 94.7207 94.0974 94.6469 93.2426C94.5731 92.3877 94.3097 91.5638 93.8786 90.8388C93.4475 90.1137 92.861 89.5083 92.1673 89.0723C91.4736 88.6363 90.6927 88.3823 89.8889 88.3312L75.8953 87.4416L73.8349 94.746L88.2406 98.9638C89.4443 99.3162 90.7277 99.184 91.8458 98.5923C92.964 98.0006 93.8387 96.9908 94.3033 95.7556V95.7556Z" fill="#FFB8B8"/>
            <path d="M79.2773 99.0864L79.1233 85.3801L48.0403 80.0926L24.0944 50.8141C22.8485 49.2907 21.127 48.3004 19.2487 48.0266C17.3704 47.7528 15.4627 48.214 13.8789 49.3248C12.92 49.9974 12.1114 50.8863 11.5101 51.9287C10.9089 52.9711 10.5297 54.1415 10.3995 55.3573C10.2693 56.5731 10.3911 57.8046 10.7564 58.9646C11.1216 60.1247 11.7215 61.1851 12.5134 62.0709L32.2686 87.9893L79.2773 99.0864Z" fill="#575A89"/>
            <path d="M4.62506 253.275H12.8185L33.1414 155.317L54.1955 185.578L66.4857 251.091H74.2695L72.6308 180.774L45.1827 105.653H18.1443C10.7554 119.909 4.95908 134.605 11.5895 149.765L4.62506 253.275Z" fill="#353176"/>
            <path d="M61.4629 259.224C61.3724 259.534 61.3446 259.86 61.3814 260.181C61.4183 260.502 61.5189 260.812 61.6767 261.088C61.8344 261.365 62.0457 261.603 62.2963 261.786C62.5469 261.969 62.8313 262.092 63.1303 262.149L83.1798 265.942C83.972 266.097 84.79 265.937 85.4793 265.493C86.1687 265.049 86.6818 264.351 86.9221 263.532V263.532C87.1557 262.749 87.1231 261.903 86.8299 261.143C86.5367 260.383 86.0016 259.757 85.3187 259.376C80.9102 256.963 77.1162 253.446 74.2617 249.128C72.0582 251.315 69.5952 251.109 66.9799 249.497L64.2059 249.867L61.4629 259.224Z" fill="#19191B"/>
            <path d="M0.831411 259.224C0.740818 259.534 0.713016 259.86 0.749865 260.181C0.786715 260.502 0.887364 260.812 1.04511 261.088C1.20286 261.365 1.4141 261.603 1.66475 261.786C1.91539 261.969 2.1997 262.092 2.49875 262.149L22.5482 265.942C23.3405 266.097 24.1584 265.937 24.8477 265.493C25.5371 265.049 26.0503 264.351 26.2905 263.532V263.532C26.5242 262.749 26.4915 261.903 26.1983 261.143C25.9051 260.383 25.37 259.757 24.6871 259.376C20.2787 256.963 16.4847 253.446 13.6302 249.128C11.4266 251.315 8.96369 251.109 6.34835 249.497L3.57432 249.867L0.831411 259.224Z" fill="#19191B"/>
            <path d="M26.5426 44.7264C32.8777 44.7264 38.0134 39.2513 38.0134 32.4974C38.0134 25.7435 32.8777 20.2684 26.5426 20.2684C20.2074 20.2684 15.0717 25.7435 15.0717 32.4974C15.0717 39.2513 20.2074 44.7264 26.5426 44.7264Z" fill="#FFB8B8"/>
            <path d="M16.3007 108.929L46.2068 108.055L37.4241 78.5863C42.8821 69.2581 37.389 59.9393 29.6151 50.6225L23.47 46.255L13.6379 45.3815C9.38091 50.2377 7.05165 56.6616 7.13793 63.3076C7.33261 77.5392 9.6963 93.0317 16.3007 108.929Z" fill="#575A89"/>
            <path d="M85.0114 128.765C85.581 128.158 86.0071 127.415 86.2546 126.598C86.5022 125.781 86.5641 124.914 86.4353 124.066C86.3065 123.219 85.9906 122.416 85.5138 121.724C85.0369 121.033 84.4127 120.472 83.6925 120.087L71.1554 113.401L66.5659 119.252L78.2537 129.171C79.2304 130 80.459 130.417 81.7054 130.342C82.9517 130.267 84.1285 129.705 85.0114 128.765V128.765Z" fill="#FFB8B8"/>
            <path d="M69.9678 125.525L74.8839 112.859L48.2581 94.9623L37.0467 58.0017C36.4634 56.0787 35.2461 54.4462 33.6202 53.4068C31.9944 52.3673 30.0703 51.9913 28.2044 52.3483V52.3483C27.0746 52.5645 26.0032 53.0426 25.0658 53.7488C24.1284 54.455 23.3479 55.3721 22.7795 56.4352C22.2112 57.4983 21.8688 58.6816 21.7765 59.9013C21.6843 61.1211 21.8444 62.3475 22.2457 63.494L30.8441 95.6078L69.9678 125.525Z" fill="#575A89"/>
            <path d="M7.69763 27.6931C7.69763 32.4515 10.5963 39.8206 14.2524 42.9794C16.7124 45.1048 19.9634 45.0153 21.2168 42.1059C22.5026 39.1214 26.9349 32.1061 34.736 27.6931C45.1354 21.8103 31.0481 11.7457 21.2168 13.2804C13.8292 14.4336 7.69763 19.7332 7.69763 27.6931Z" fill="#463C19"/>
            <path d="M14.6621 21.1419C19.1872 21.1419 22.8555 17.2311 22.8555 12.4069C22.8555 7.5827 19.1872 3.67191 14.6621 3.67191C10.137 3.67191 6.46863 7.5827 6.46863 12.4069C6.46863 17.2311 10.137 21.1419 14.6621 21.1419Z" fill="#463C19"/>
            <path d="M24.0845 9.34966C24.0837 7.14749 23.3023 5.02701 21.8967 3.41323C20.4912 1.79945 18.5655 0.811618 16.5056 0.647728C16.7092 0.631576 16.9127 0.614655 17.1201 0.614655C19.2932 0.614655 21.3772 1.53495 22.9138 3.17308C24.4503 4.81121 25.3136 7.03299 25.3136 9.34966C25.3136 11.6663 24.4503 13.8881 22.9138 15.5262C21.3772 17.1644 19.2932 18.0847 17.1201 18.0847C16.9127 18.0847 16.7092 18.0677 16.5056 18.0516C18.5655 17.8877 20.4912 16.8998 21.8967 15.2861C23.3022 13.6723 24.0837 11.5518 24.0845 9.34966Z" fill="#463C19"/>
            <path d="M26.7474 36.8649C27.7655 36.8649 28.5909 35.6917 28.5909 34.2444C28.5909 32.7971 27.7655 31.6239 26.7474 31.6239C25.7292 31.6239 24.9039 32.7971 24.9039 34.2444C24.9039 35.6917 25.7292 36.8649 26.7474 36.8649Z" fill="#FFB8B8"/>
            <path d="M258.894 237.255H131.347L104.338 101.136H81.2876V95.0283H108.982L135.991 231.147H258.894V237.255Z" fill="#3F3D56"/>
            <path d="M150.039 262.123C156.819 262.123 162.316 256.263 162.316 249.035C162.316 241.806 156.819 235.946 150.039 235.946C143.258 235.946 137.762 241.806 137.762 249.035C137.762 256.263 143.258 262.123 150.039 262.123Z" fill="#3F3D56"/>
            <path d="M241.706 262.123C248.487 262.123 253.983 256.263 253.983 249.035C253.983 241.806 248.487 235.946 241.706 235.946C234.926 235.946 229.43 241.806 229.43 249.035C229.43 256.263 234.926 262.123 241.706 262.123Z" fill="#3F3D56"/>
            <path d="M256.569 234.379H132.473L110.577 119.023H277.116C277.966 119.024 278.806 119.22 279.577 119.599C280.349 119.978 281.035 120.531 281.587 121.219C282.14 121.908 282.546 122.716 282.777 123.587C283.009 124.459 283.06 125.374 282.929 126.269L262.38 229.081C262.168 230.56 261.465 231.909 260.398 232.881C259.331 233.854 257.972 234.385 256.569 234.379V234.379ZM133.82 232.634H256.569C257.582 232.639 258.562 232.255 259.332 231.553C260.102 230.851 260.61 229.877 260.762 228.81L281.311 125.998C281.406 125.352 281.369 124.692 281.202 124.062C281.035 123.433 280.742 122.85 280.343 122.353C279.945 121.856 279.45 121.457 278.893 121.184C278.336 120.91 277.729 120.768 277.116 120.769H112.564L133.82 232.634Z" fill="#3F3D56"/>
            <path d="M156.597 234.01L142.258 120.038L143.873 119.754L158.212 233.726L156.597 234.01Z" fill="#3F3D56"/>
            <path d="M236.328 233.135L234.712 232.856L248.632 119.756L250.248 120.036L236.328 233.135Z" fill="#3F3D56"/>
            <path d="M198.341 119.896H196.704V233.868H198.341V119.896Z" fill="#3F3D56"/>
            <path d="M118.939 150.436L118.935 152.181L277.387 152.59L277.391 150.845L118.939 150.436Z" fill="#3F3D56"/>
            <path d="M266.21 204.344L127.006 205.359L127.017 207.104L266.221 206.089L266.21 204.344Z" fill="#3F3D56"/>
            <path d="M83.7431 102.445C88.7154 102.445 92.7462 100.101 92.7462 97.2094C92.7462 94.318 88.7154 91.9741 83.7431 91.9741C78.7708 91.9741 74.74 94.318 74.74 97.2094C74.74 100.101 78.7708 102.445 83.7431 102.445Z" fill="#3F3D56"/>
          </svg>
        </div>
        <div className="login-signup-div">
          { props.pages === 'loginPage' ? <Login {...props} /> : null }
          { props.pages === 'signupPage' ? <Signup {...props} /> : null }
        </div>
        <div className="phone-vector-div">
          <svg width="176" height="376" viewBox="0 0 176 376" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M175.531 89.1846H173.597V32.6948C173.597 28.4013 172.804 24.1497 171.263 20.183C169.721 16.2163 167.462 12.612 164.615 9.57605C161.767 6.54006 158.386 4.13178 154.665 2.48872C150.944 0.845654 146.957 -1.34325e-05 142.929 1.60026e-10H30.6679C26.6405 -1.34325e-05 22.6526 0.845653 18.9318 2.48872C15.211 4.13178 11.8302 6.54006 8.9824 9.57606C6.13462 12.6121 3.87564 16.2163 2.33444 20.183C0.793234 24.1498 -6.2999e-06 28.4013 0 32.6948V342.602C-3.77993e-06 346.896 0.79324 351.147 2.33444 355.114C3.87565 359.081 6.13463 362.685 8.98241 365.721C11.8302 368.757 15.211 371.165 18.9318 372.808C22.6526 374.451 26.6405 375.297 30.6679 375.297H142.929C146.957 375.297 150.944 374.451 154.665 372.808C158.386 371.165 161.767 368.757 164.615 365.721C167.462 362.685 169.721 359.081 171.263 355.114C172.804 351.147 173.597 346.896 173.597 342.602V129.395H175.531V89.1846Z" fill="#E6E6E6"/>
            <path d="M144.167 8.5061H129.513C130.187 10.2675 130.444 12.1785 130.262 14.0708C130.08 15.9631 129.464 17.7787 128.469 19.3575C127.473 20.9363 126.129 22.23 124.555 23.1245C122.98 24.0191 121.223 24.487 119.439 24.4872H55.1256C53.3412 24.487 51.5843 24.0191 50.0096 23.1245C48.4349 22.23 47.0907 20.9363 46.0954 19.3575C45.1002 17.7787 44.4844 15.9631 44.3023 14.0708C44.1202 12.1785 44.3775 10.2675 45.0514 8.5061H31.3647C28.3571 8.5061 25.379 9.13763 22.6003 10.3647C19.8217 11.5917 17.2969 13.3901 15.1702 15.6574C13.0436 17.9246 11.3566 20.6162 10.2056 23.5785C9.05468 26.5408 8.46228 29.7158 8.46228 32.9222V342.375C8.46228 345.581 9.05467 348.756 10.2056 351.719C11.3566 354.681 13.0436 357.373 15.1702 359.64C17.2969 361.907 19.8217 363.706 22.6003 364.933C25.3789 366.16 28.3571 366.791 31.3647 366.791H144.167C147.174 366.791 150.152 366.16 152.931 364.933C155.71 363.706 158.234 361.907 160.361 359.64C162.488 357.373 164.175 354.681 165.326 351.719C166.477 348.756 167.069 345.581 167.069 342.375V32.9222C167.069 29.7158 166.477 26.5408 165.326 23.5785C164.175 20.6162 162.488 17.9246 160.361 15.6574C158.234 13.3901 155.71 11.5917 152.931 10.3647C150.152 9.13763 147.174 8.5061 144.167 8.5061V8.5061Z" fill="#2D2933"/>
            <path d="M54.5321 71.4145H47.797C47.5602 71.4145 47.333 71.5148 47.1656 71.6933C46.9981 71.8718 46.9041 72.1139 46.9041 72.3664V75.518C46.9041 75.7705 46.9981 76.0126 47.1656 76.1911C47.333 76.3697 47.5602 76.47 47.797 76.47H48.9131V81.1922H53.4159V76.47H54.5321C54.7689 76.47 54.996 76.3697 55.1634 76.1911C55.3309 76.0126 55.425 75.7705 55.425 75.518V72.3664C55.425 72.1139 55.3309 71.8718 55.1634 71.6933C54.996 71.5148 54.7689 71.4145 54.5321 71.4145V71.4145Z" fill="#E6E6E6"/>
            <path className="changeColor" d="M61.2779 100.258C57.1532 93.8234 55.0445 86.1622 55.254 78.3718C55.2578 78.192 55.2031 78.0164 55.0992 77.8748C54.9952 77.7332 54.8486 77.6342 54.684 77.5948V76.233H47.5709V77.5759H47.4729C47.2793 77.5762 47.0938 77.6584 46.9571 77.8045C46.8204 77.9506 46.7437 78.1487 46.744 78.355C46.744 78.3739 46.7446 78.3928 46.746 78.4117C47.3063 86.7395 45.4141 94.2078 41.0691 100.817C40.8191 101.196 40.6914 101.652 40.7051 102.116L41.4829 127.765C41.5016 128.337 41.7268 128.88 42.1116 129.279C42.4963 129.678 43.0109 129.904 43.5478 129.908H59.6366C60.1797 129.904 60.6996 129.673 61.0855 129.266C61.4714 128.858 61.6929 128.306 61.7028 127.728L62.0025 102.824C62.0114 101.91 61.7586 101.015 61.2779 100.258Z" fill="#6C63FF"/>
            <path d="M58.731 108.778H44.727C44.5197 108.778 44.3148 108.826 44.1265 108.918C43.9381 109.01 43.7707 109.145 43.6357 109.313C43.5008 109.48 43.4014 109.677 43.3445 109.89C43.2875 110.102 43.2744 110.325 43.3059 110.544L45.4221 125.208H57.5737L60.1441 110.593C60.1831 110.372 60.1758 110.144 60.1228 109.926C60.0697 109.708 59.9723 109.505 59.8374 109.332C59.7025 109.158 59.5334 109.019 59.3422 108.923C59.1509 108.827 58.9423 108.778 58.731 108.778V108.778Z" fill="white"/>
            <path d="M129.506 148.25H122.771C122.534 148.25 122.307 148.35 122.14 148.529C121.972 148.707 121.878 148.95 121.878 149.202V152.354C121.878 152.606 121.972 152.848 122.14 153.027C122.307 153.205 122.534 153.306 122.771 153.306H123.887V158.028H128.39V153.306H129.506C129.743 153.306 129.97 153.205 130.138 153.027C130.305 152.848 130.399 152.606 130.399 152.354V149.202C130.399 148.95 130.305 148.707 130.138 148.529C129.97 148.35 129.743 148.25 129.506 148.25Z" fill="#E6E6E6"/>
            <path className="changeColor" d="M136.252 177.094C132.127 170.659 130.019 162.998 130.228 155.207C130.232 155.028 130.177 154.852 130.073 154.71C129.969 154.569 129.823 154.47 129.658 154.43V153.069H122.545V154.412H122.447C122.351 154.412 122.256 154.432 122.168 154.471C122.079 154.51 121.999 154.568 121.931 154.64C121.864 154.712 121.81 154.798 121.773 154.893C121.737 154.987 121.718 155.088 121.718 155.191C121.718 155.21 121.719 155.228 121.72 155.247C122.281 163.575 120.388 171.043 116.043 177.652C115.793 178.032 115.666 178.488 115.679 178.952L116.457 204.601C116.476 205.173 116.701 205.715 117.086 206.115C117.471 206.514 117.985 206.739 118.522 206.744H134.611C135.154 206.739 135.674 206.509 136.06 206.101C136.446 205.694 136.667 205.142 136.677 204.563L136.977 179.66C136.986 178.746 136.733 177.851 136.252 177.094V177.094Z" fill="#6C63FF"/>
            <path d="M133.705 185.613H119.701C119.494 185.613 119.289 185.661 119.101 185.754C118.912 185.846 118.745 185.98 118.61 186.148C118.475 186.316 118.376 186.513 118.319 186.725C118.262 186.938 118.249 187.161 118.28 187.379L120.396 202.044H132.548L135.118 187.429C135.157 187.207 135.15 186.98 135.097 186.762C135.044 186.544 134.947 186.341 134.812 186.167C134.677 185.994 134.508 185.855 134.316 185.759C134.125 185.663 133.917 185.613 133.705 185.613H133.705Z" fill="white"/>
            <path d="M45.0634 256.873H41.8687C41.7564 256.873 41.6486 256.921 41.5692 257.005C41.4898 257.09 41.4451 257.205 41.4451 257.325V258.82C41.4451 258.939 41.4898 259.054 41.5692 259.139C41.6486 259.224 41.7564 259.271 41.8687 259.271H42.3981V261.511H44.534V259.271H45.0634C45.1758 259.271 45.2835 259.224 45.3629 259.139C45.4424 259.054 45.487 258.939 45.487 258.82V257.325C45.487 257.205 45.4424 257.09 45.3629 257.005C45.2835 256.921 45.1758 256.873 45.0634 256.873Z" fill="#E6E6E6"/>
            <path d="M48.2633 270.555C46.3067 267.503 45.3065 263.869 45.4059 260.173C45.4077 260.088 45.3817 260.005 45.3324 259.937C45.2831 259.87 45.2136 259.823 45.1355 259.805V259.159H41.7614V259.796H41.7149C41.6695 259.796 41.6245 259.805 41.5825 259.824C41.5405 259.843 41.5024 259.87 41.4703 259.904C41.4382 259.938 41.4127 259.979 41.3954 260.024C41.378 260.069 41.3691 260.117 41.3692 260.165C41.3692 260.174 41.3695 260.183 41.3701 260.192C41.6816 263.963 40.7273 267.729 38.6774 270.82C38.5588 271 38.4982 271.216 38.5047 271.436L38.8736 283.603C38.8825 283.874 38.9893 284.131 39.1718 284.321C39.3543 284.51 39.5984 284.617 39.8531 284.619H47.4847C47.7423 284.617 47.989 284.508 48.172 284.315C48.3551 284.121 48.4602 283.86 48.4648 283.585L48.607 271.772C48.6112 271.339 48.4913 270.914 48.2633 270.555V270.555Z" fill="#E6E6E6"/>
            <path d="M47.165 275.027H39.8831V278.909H47.165V275.027Z" fill="#2D2933"/>
            <path d="M59.935 256.873H56.7403C56.6279 256.873 56.5202 256.921 56.4408 257.005C56.3613 257.09 56.3167 257.205 56.3167 257.325V258.82C56.3167 258.939 56.3613 259.054 56.4408 259.139C56.5202 259.224 56.6279 259.271 56.7403 259.271H57.2697V261.511H59.4056V259.271H59.935C60.0474 259.271 60.1551 259.224 60.2345 259.139C60.314 259.054 60.3586 258.939 60.3586 258.82V257.325C60.3586 257.205 60.314 257.09 60.2345 257.005C60.1551 256.921 60.0474 256.873 59.935 256.873Z" fill="#E6E6E6"/>
            <path d="M63.1349 270.555C61.1784 267.503 60.1782 263.869 60.2776 260.173C60.2793 260.088 60.2534 260.005 60.2041 259.937C60.1548 259.87 60.0852 259.823 60.0072 259.805V259.159H56.6331V259.796H56.5866C56.5411 259.796 56.4961 259.805 56.4541 259.824C56.4122 259.843 56.374 259.87 56.3419 259.904C56.3098 259.938 56.2843 259.979 56.267 260.024C56.2497 260.069 56.2408 260.117 56.2408 260.165C56.2408 260.174 56.2412 260.183 56.2418 260.192C56.5532 263.963 55.599 267.729 53.549 270.82C53.4304 271 53.3698 271.216 53.3763 271.436L53.7452 283.603C53.7541 283.874 53.8609 284.131 54.0435 284.321C54.226 284.51 54.47 284.617 54.7247 284.619H62.3564C62.614 284.617 62.8606 284.508 63.0437 284.315C63.2267 284.121 63.3318 283.86 63.3365 283.585L63.4786 271.772C63.4829 271.339 63.363 270.914 63.1349 270.555Z" fill="#E6E6E6"/>
            <path d="M62.0366 275.027H54.7548V278.909H62.0366V275.027Z" fill="#2D2933"/>
            <path d="M74.8067 256.873H71.6119C71.4996 256.873 71.3918 256.921 71.3124 257.005C71.233 257.09 71.1884 257.205 71.1884 257.325V258.82C71.1884 258.939 71.233 259.054 71.3124 259.139C71.3918 259.224 71.4996 259.271 71.6119 259.271H72.1413V261.511H74.2772V259.271H74.8067C74.919 259.271 75.0267 259.224 75.1062 259.139C75.1856 259.054 75.2302 258.939 75.2302 258.82V257.325C75.2302 257.205 75.1856 257.09 75.1062 257.005C75.0267 256.921 74.919 256.873 74.8067 256.873Z" fill="#E6E6E6"/>
            <path d="M78.0065 270.555C76.05 267.503 75.0497 263.869 75.1491 260.173C75.1509 260.088 75.1249 260.005 75.0757 259.937C75.0264 259.87 74.9568 259.823 74.8787 259.805V259.159H71.5047V259.796H71.4582C71.4127 259.796 71.3677 259.805 71.3257 259.824C71.2837 259.843 71.2456 259.87 71.2135 259.904C71.1814 259.938 71.1559 259.979 71.1386 260.024C71.1212 260.069 71.1124 260.117 71.1124 260.165C71.1124 260.174 71.1127 260.183 71.1134 260.192C71.4248 263.963 70.4705 267.729 68.4206 270.82C68.302 271 68.2414 271.216 68.2479 271.436L68.6168 283.603C68.6257 283.874 68.7325 284.131 68.915 284.321C69.0975 284.51 69.3416 284.617 69.5963 284.619H77.228C77.4856 284.617 77.7322 284.508 77.9153 284.315C78.0983 284.121 78.2034 283.86 78.2081 283.585L78.3502 271.772C78.3544 271.339 78.2346 270.914 78.0065 270.555Z" fill="#E6E6E6"/>
            <path d="M76.9082 275.027H69.6263V278.909H76.9082V275.027Z" fill="#2D2933"/>
            <path d="M117.806 227.148H111.071C110.954 227.148 110.837 227.173 110.729 227.221C110.621 227.269 110.522 227.339 110.439 227.427C110.357 227.516 110.291 227.621 110.246 227.736C110.201 227.852 110.178 227.975 110.178 228.1V231.252C110.178 231.504 110.272 231.747 110.439 231.925C110.607 232.104 110.834 232.204 111.071 232.204H112.187V236.926H116.69V232.204H117.806C118.043 232.204 118.27 232.104 118.437 231.925C118.605 231.747 118.699 231.504 118.699 231.252V228.1C118.699 227.975 118.676 227.852 118.631 227.736C118.586 227.621 118.52 227.516 118.437 227.427C118.354 227.339 118.256 227.269 118.148 227.221C118.039 227.173 117.923 227.148 117.806 227.148V227.148Z" fill="#E6E6E6"/>
            <path className="changeColor" d="M124.552 255.992C120.427 249.557 118.318 241.896 118.528 234.106C118.532 233.926 118.477 233.75 118.373 233.609C118.269 233.467 118.122 233.368 117.958 233.329V231.967H110.845V233.31H110.747C110.651 233.31 110.556 233.33 110.468 233.369C110.379 233.409 110.299 233.466 110.231 233.538C110.163 233.611 110.11 233.697 110.073 233.791C110.037 233.886 110.018 233.987 110.018 234.089C110.018 234.108 110.019 234.127 110.02 234.146C110.58 242.473 108.688 249.942 104.343 256.55C104.093 256.93 103.965 257.386 103.979 257.85L104.757 283.499C104.776 284.071 105.001 284.614 105.385 285.013C105.77 285.412 106.285 285.638 106.822 285.642H122.911C123.454 285.638 123.973 285.407 124.359 285C124.745 284.592 124.967 284.04 124.977 283.461L125.276 258.558C125.285 257.644 125.033 256.749 124.552 255.992Z" fill="#6C63FF"/>
            <path d="M122.005 264.512H108.001C107.794 264.512 107.589 264.56 107.4 264.652C107.212 264.744 107.045 264.879 106.91 265.047C106.775 265.214 106.675 265.411 106.618 265.624C106.561 265.836 106.548 266.059 106.58 266.278L108.696 280.942H120.848L123.418 266.327C123.457 266.106 123.45 265.878 123.397 265.66C123.344 265.442 123.246 265.239 123.111 265.066C122.976 264.892 122.807 264.753 122.616 264.657C122.425 264.561 122.216 264.512 122.005 264.512V264.512Z" fill="white"/>
            <path d="M121.483 133.21H81.3353C84.1422 117.032 83.4964 97.4958 81.3353 76.4861H121.483C119.379 97.4958 118.751 117.032 121.483 133.21Z" fill="#E6E6E6"/>
            <path d="M101.651 113.615C106.994 113.615 111.325 108.997 111.325 103.301C111.325 97.6052 106.994 92.9877 101.651 92.9877C96.308 92.9877 91.9768 97.6052 91.9768 103.301C91.9768 108.997 96.308 113.615 101.651 113.615Z" fill="#2D2933"/>
            <path d="M84.7212 208.499H44.5737C47.3806 192.32 46.7348 172.784 44.5737 151.775H84.7212C82.6176 172.784 81.989 192.32 84.7212 208.499Z" fill="#E6E6E6"/>
            <path d="M64.8893 188.903C70.2322 188.903 74.5634 184.286 74.5634 178.59C74.5634 172.894 70.2322 168.276 64.8893 168.276C59.5464 168.276 55.2152 172.894 55.2152 178.59C55.2152 184.286 59.5464 188.903 64.8893 188.903Z" fill="#2D2933"/>
            <path d="M144.217 134.242H104.069C106.876 118.063 106.231 98.5271 104.069 77.5174H144.217C142.113 98.5272 141.485 118.063 144.217 134.242Z" fill="#E6E6E6"/>
            <path d="M144.217 136.82H104.069C106.876 120.642 106.231 101.106 104.069 80.0958H144.217C142.113 101.106 141.485 120.642 144.217 136.82Z" fill="#E6E6E6"/>
            <path d="M124.385 117.224C129.728 117.224 134.059 112.607 134.059 106.911C134.059 101.215 129.728 96.5974 124.385 96.5974C119.042 96.5974 114.711 101.215 114.711 106.911C114.711 112.607 119.042 117.224 124.385 117.224Z" fill="#2D2933"/>
            <path d="M153.407 130.116H21.8397V145.587H153.407V130.116Z" fill="#E6E6E6"/>
            <path d="M153.407 206.952H21.8397V222.422H153.407V206.952Z" fill="#E6E6E6"/>
            <path d="M153.407 283.788H21.8397V299.258H153.407V283.788Z" fill="#E6E6E6"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default DesktopHome