document.addEventListener('DOMContentLoaded', function() {
    changeContent('page1');
});

function changeContent(page) {
    let contentArea = document.getElementById('content-area');

    switch(page) {
        case 'page1':
            contentArea.innerHTML = '<iframe src="PruebaSocial.html" style="width:100%; height:100%; border-radius: 35px;" frameborder="0"></iframe>';
            break;
        case 'page2':
            contentArea.innerHTML = '<iframe src="" style="width:100%; height:100%; border-radius: 35px;" frameborder="0"></iframe>';
            break;
        case 'page3':
            contentArea.innerHTML = '<iframe src="" style="width:100%; height:100%; border-radius: 35px;" frameborder="0"></iframe>';
            break;
        default:
            contentArea.innerHTML = '';
    }
}
