
//Local
chrome.commands.onCommand.addListener(function (command) {
    if (command === "scroll") {
        document.querySelectorAll('input[placeholder|="Pain(NMPA/NIH)"').forEach(item => { item.click() })
        document.querySelectorAll('input[placeholder|="Induration(NMPA/NIH)"').forEach(item => { item.value = '0'; item.dispatchEvent(new Event('input')) })
        document.querySelectorAll('input[placeholder|="Redness(NMPA/NIH)"').forEach(item => { item.value = '0'; item.dispatchEvent(new Event('input')) })
        document.querySelectorAll('input[placeholder|="Swelling(NMPA/NIH)"').forEach(item => { item.value = '0'; item.dispatchEvent(new Event('input')) })
        document.querySelectorAll('input[placeholder|="Rash(NMPA)"').forEach(item => { item.value = '0'; item.dispatchEvent(new Event('input')) })
        document.querySelectorAll('input[placeholder|="Rash(NIH)"').forEach(item => { item.click() })
        document.querySelectorAll('input[placeholder|="Cellulitis (NMPA/NIH)"').forEach(item => { item.click() })
        document.querySelectorAll('input[placeholder|="Pruritus(NMPA/NIH)"').forEach(item => { item.click() })
        document.querySelectorAll('.el-select-dropdown__list > li:first-child').forEach(item => item.click())
    }
});
