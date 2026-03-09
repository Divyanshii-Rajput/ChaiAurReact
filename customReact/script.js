
function customRender(reactElement, Container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.Children

    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // Container.appendChild(domElement)

    // version2
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children

    for (const prop in reactElement.props) {
        if(prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])        
    }
    Container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

// adds element under root
customRender(reactElement, mainContainer)

// react can't understand html
// bundler (eg vite) converts the syntax
//  jsx - javascript m html mix
// in vite
// render(
    // <MyApp/>  this is fn can be called as MyApp()
// )