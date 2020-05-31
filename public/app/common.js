$(() => {
    $('#navbar').load('/components/navbar.hbs' /*, loginIfNeeded*/ )
    $('#footer').load('/components/footer.hbs')
    $('#content').load('/components/content.html', )
        // $('#content').load('../../views/content.hbs') // this contains it's own scripts too
        // this contains it's own scripts too
})

// function loginIfNeeded() {
//     window.currentUser = window.localStorage.user ?
//         JSON.parse(window.localStorague.user) :
//         null
//     if (!currentUser) {
//         $.post('/api/users', {}, (user) => {
//             if (user) {
//                 console.log('registered current user as ', user.username)
//                 window.localStorage.user = JSON.stringify(user)
//                 currentUser = user
//                 $('#nav-username').text(currentUser.username)
//             }
//         })
//     } else {
//         console.log('resuming session as ', currentUser.username)
//         console.log($('#nav-username'))
//         $('#nav-username').text(currentUser.username)
//     }
// }