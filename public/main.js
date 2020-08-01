getCSS.onclick = function () {
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css');
    request.onload = () => {
        console.log('成功了');
        let style = document.createElement('style')
        style.innerHTML = request.response;
        document.head.appendChild(style)
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.send();
}
getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/2.js')
    request.onload = () => {
        const script = document.createElement('script');
        script.innerHTML = request.response;
        document.body.appendChild(script);
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.send();
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest;
    request.open('GET', '/3.html');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const div = document.createElement('div')
                div.innerHTML = request.response;
                document.body.appendChild(div)
            } else {
                console.log('加载失败')
            }
        }
    }
    request.send();
}
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const obj = request.responseXML;
                console.log(obj.getElementsByTagName('warning')[0].textContent.trim());
            } else {
                console.log('加载失败')
            }
        }
    }
    request.send();
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest;
    request.open('GET', '/5.json');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                let object = JSON.parse(request.response);
                console.log(object);
            }
        }
    }
    request.send();
}
let n = 1;
getNext.onclick = () => {
    const request = new XMLHttpRequest;
    request.open('GET', `/page${n+1}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                let result = JSON.parse(request.response);
                result.forEach(item => {
                    let li = document.createElement('li');
                    li.textContent = item.id;
                    xxx.appendChild(li);
                });
                n += 1;
            }
        }
    }
    request.send();
}