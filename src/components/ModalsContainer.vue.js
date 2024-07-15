import { __assign, __awaiter, __generator, __read, __spreadArray } from "tslib";
import { ref, defineExpose } from 'vue';
var _a = await import('vue'), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var isField = ref(false);
var imgUrl = ref();
var showView = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        isField.value = true;
        imgUrl.value = url;
        console.log("ksdfjhkhfdsk");
        return [2 /*return*/];
    });
}); };
var __VLS_exposed = { showView: showView };
defineExpose({ showView: showView });
var __VLS_fnComponent = (await import('vue')).defineComponent({});
var __VLS_functionalComponentProps;
function __VLS_template() {
    var __VLS_ctx;
    /* Components */
    var __VLS_otherComponents;
    var __VLS_own;
    var __VLS_localComponents;
    var __VLS_components;
    var __VLS_styleScopedClasses;
    var __VLS_resolvedLocalAndGlobalComponents;
    // @ts-ignore
    var __VLS_0 = {}
        .VueFinalModal;
    ({}.VueFinalModal);
    ({}.VueFinalModal);
    __VLS_components.VueFinalModal;
    __VLS_components.vueFinalModal;
    __VLS_components.VueFinalModal;
    __VLS_components.vueFinalModal;
    // @ts-ignore
    [VueFinalModal, VueFinalModal,];
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ modelValue: ((__VLS_ctx.isField)), classes: ("modal-container"), contentClass: ("mw-25 modal-content overflow-scroll"), }));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{ modelValue: ((__VLS_ctx.isField)), classes: ("modal-container"), contentClass: ("mw-25 modal-content overflow-scroll"), }], __read(__VLS_functionalComponentArgsRest(__VLS_1)), false));
    ({}({ modelValue: ((__VLS_ctx.isField)), classes: ("modal-container"), contentClass: ("mw-25 modal-content overflow-scroll"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.imgUrl)), });
    // @ts-ignore
    [isField, imgUrl,];
    (__VLS_5.slots).default;
    var __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    var __VLS_componentsOption = {};
    var __VLS_name;
    var __VLS_defineComponent;
    var __VLS_internalComponent = __VLS_defineComponent({
        setup: function () {
            return {
                isField: isField,
                imgUrl: imgUrl,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup: function () {
        return __assign({}, __VLS_exposed);
    },
});
;
//# sourceMappingURL=ModalsContainer.vue.js.map