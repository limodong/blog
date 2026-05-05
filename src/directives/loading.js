import loading from '@/assets/loading.svg';
import style from './loading.module.less';
const className = "vloading"
export default function (el, binding) {
    let loadingEl = el.querySelector('.'+className);
    if (!loadingEl) {
        loadingEl = document.createElement("img");
        loadingEl.className = className;
    }
    if (binding.value) {
        el.style.position = "relctive"; 
        loadingEl.src = loading;
        loadingEl.className = `${className} ${style.loading}`;
        el.appendChild(loadingEl);
    } else {
        loadingEl.remove();
    }
}