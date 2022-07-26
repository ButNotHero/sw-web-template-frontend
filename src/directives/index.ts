import { App } from 'vue';
import { vueEffectRipple } from '@/directives/ripple';
import { vueClickOutside } from '@/directives/clickOutside';
import { vueDragScroll } from '@/directives/dragscroll';
import { vueTouchEvents } from '@/directives/touch';

export const installVueDirectives = (app: App) => {
  vueEffectRipple(app);
  vueClickOutside(app);
  vueDragScroll(app);
  vueTouchEvents(app);
};
