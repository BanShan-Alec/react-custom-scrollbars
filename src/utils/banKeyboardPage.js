export default function banKeyboardPage(viewTag) {
    const view = document.querySelector(`div[tag=${viewTag}]`);
    const banElement = view && (view.querySelector('textarea') || view.querySelector('.public-DraftEditor-content'))
    if(!banElement) return;
    banElement.addEventListener('keydown', handleBanKeyboardPage);
    this.setState({removeBanKeyboardPage: () => {
        banElement.removeEventListener('keydown', handleBanKeyboardPage);
    }});
}

function handleBanKeyboardPage(event) {
    if (event.key === 'PageUp' || event.key === 'PageDown') {
        event.preventDefault();
    }
}