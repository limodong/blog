import loading from '@/assets/loading.svg';
import style from './loading.module.less';
export default function (el, binding) {
    let loadingEl = el.querySelector('img');
    if (!loadingEl) {
        loadingEl = document.createElement("img");
    }
    if (binding.value) {
        el.style.position = "relctive"; 
        loadingEl.src = loading;
        loadingEl.className = style.loading;
        el.appendChild(loadingEl);
    } else {
        loadingEl.remove();
    }
}