import { __assign, __read, __values } from "tslib";
import { ref } from 'vue';
import { useRouter } from 'vue-router';
var _a = await import('vue'), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var router = useRouter();
var goAboutPage = function (index) {
    router.push({
        name: 'about',
        params: { index: index }
    });
};
var data = ref([{
        name: 'VETEVA',
        displayImg: '/favicon.ico',
        listImgs: ['https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOK_jbqp2_wJrC9xGgUmIk7JAdg19ot0Cz8ZN_d9ziW4spLqkkoVMATlGlYrKYC0_COs&usqp=CAU', 'https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg'],
        Technology: 'Flutter, Firebase, Agora Video Call, Consultations, Appointment, Ring',
        Description: 'Veteva is a mobile application that provides access to a consultation & communication with vet to its users. Consult with India’s top vets 24/7 within 10 minutes . Receive E-Prescription past consultation. Chat with the vet within 24 hours from consultation time. It is available for download on both Android and iOS devices. This app connects with the Veteva pro application that is related to vet.',
        Features: 'Rest API Integration, GIT, Firebase, Exotel, Appointment, Facebook events, CallKit, Chat',
        Android: 'https://play.google.com/store/apps/details?id=com.veteva.pet',
        IOS: 'https://apps.apple.com/us/app/veteva-consult-vets-24-7/id1642855776'
    },
    {
        name: 'VETEVA',
        displayImg: 'https://img.freepik.com/photos-gratuite/beau-papillon-dans-nature_23-2150765755.jpg',
        listImgs: ['https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOK_jbqp2_wJrC9xGgUmIk7JAdg19ot0Cz8ZN_d9ziW4spLqkkoVMATlGlYrKYC0_COs&usqp=CAU', 'https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg'],
        Technology: 'Flutter, Firebase, Agora Video Call, Consultations, Appointment, Ring',
        Description: 'Veteva is a mobile application that provides access to a consultation & communication with vet to its users. Consult with India’s top vets 24/7 within 10 minutes . Receive E-Prescription past consultation. Chat with the vet within 24 hours from consultation time. It is available for download on both Android and iOS devices. This app connects with the Veteva pro application that is related to vet.',
        Features: 'Rest API Integration, GIT, Firebase, Exotel, Appointment, Facebook events, CallKit, Chat',
        Android: 'https://play.google.com/store/apps/details?id=com.veteva.pet',
        IOS: 'https://apps.apple.com/us/app/veteva-consult-vets-24-7/id1642855776'
    },
    {
        name: 'VETEVA',
        displayImg: 'https://img.freepik.com/photos-gratuite/beau-papillon-dans-nature_23-2150765755.jpg',
        listImgs: ['https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOK_jbqp2_wJrC9xGgUmIk7JAdg19ot0Cz8ZN_d9ziW4spLqkkoVMATlGlYrKYC0_COs&usqp=CAU', 'https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg'],
        Technology: 'Flutter, Firebase, Agora Video Call, Consultations, Appointment, Ring',
        Description: 'Veteva is a mobile application that provides access to a consultation & communication with vet to its users. Consult with India’s top vets 24/7 within 10 minutes . Receive E-Prescription past consultation. Chat with the vet within 24 hours from consultation time. It is available for download on both Android and iOS devices. This app connects with the Veteva pro application that is related to vet.',
        Features: 'Rest API Integration, GIT, Firebase, Exotel, Appointment, Facebook events, CallKit, Chat',
        Android: 'https://play.google.com/store/apps/details?id=com.veteva.pet',
        IOS: 'https://apps.apple.com/us/app/veteva-consult-vets-24-7/id1642855776'
    },
    {
        name: 'VETEVA',
        displayImg: 'https://img.freepik.com/photos-gratuite/beau-papillon-dans-nature_23-2150765755.jpg',
        listImgs: ['https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOK_jbqp2_wJrC9xGgUmIk7JAdg19ot0Cz8ZN_d9ziW4spLqkkoVMATlGlYrKYC0_COs&usqp=CAU', 'https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg'],
        Technology: 'Flutter, Firebase, Agora Video Call, Consultations, Appointment, Ring',
        Description: 'Veteva is a mobile application that provides access to a consultation & communication with vet to its users. Consult with India’s top vets 24/7 within 10 minutes . Receive E-Prescription past consultation. Chat with the vet within 24 hours from consultation time. It is available for download on both Android and iOS devices. This app connects with the Veteva pro application that is related to vet.',
        Features: 'Rest API Integration, GIT, Firebase, Exotel, Appointment, Facebook events, CallKit, Chat',
        Android: 'https://play.google.com/store/apps/details?id=com.veteva.pet',
        IOS: 'https://apps.apple.com/us/app/veteva-consult-vets-24-7/id1642855776'
    },
    {
        name: 'VETEVA',
        displayImg: 'https://img.freepik.com/photos-gratuite/beau-papillon-dans-nature_23-2150765755.jpg',
        listImgs: ['https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOK_jbqp2_wJrC9xGgUmIk7JAdg19ot0Cz8ZN_d9ziW4spLqkkoVMATlGlYrKYC0_COs&usqp=CAU', 'https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg'],
        Technology: 'Flutter, Firebase, Agora Video Call, Consultations, Appointment, Ring',
        Description: 'Veteva is a mobile application that provides access to a consultation & communication with vet to its users. Consult with India’s top vets 24/7 within 10 minutes . Receive E-Prescription past consultation. Chat with the vet within 24 hours from consultation time. It is available for download on both Android and iOS devices. This app connects with the Veteva pro application that is related to vet.',
        Features: 'Rest API Integration, GIT, Firebase, Exotel, Appointment, Facebook events, CallKit, Chat',
        Android: 'https://play.google.com/store/apps/details?id=com.veteva.pet',
        IOS: 'https://apps.apple.com/us/app/veteva-consult-vets-24-7/id1642855776'
    },
    {
        name: 'VETEVA',
        displayImg: 'https://img.freepik.com/photos-gratuite/beau-papillon-dans-nature_23-2150765755.jpg',
        listImgs: ['https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOK_jbqp2_wJrC9xGgUmIk7JAdg19ot0Cz8ZN_d9ziW4spLqkkoVMATlGlYrKYC0_COs&usqp=CAU', 'https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg'],
        Technology: 'Flutter, Firebase, Agora Video Call, Consultations, Appointment, Ring',
        Description: 'Veteva is a mobile application that provides access to a consultation & communication with vet to its users. Consult with India’s top vets 24/7 within 10 minutes . Receive E-Prescription past consultation. Chat with the vet within 24 hours from consultation time. It is available for download on both Android and iOS devices. This app connects with the Veteva pro application that is related to vet.',
        Features: 'Rest API Integration, GIT, Firebase, Exotel, Appointment, Facebook events, CallKit, Chat',
        Android: 'https://play.google.com/store/apps/details?id=com.veteva.pet',
        IOS: 'https://apps.apple.com/us/app/veteva-consult-vets-24-7/id1642855776'
    },
    {
        name: 'VETEVA',
        displayImg: 'https://img.freepik.com/photos-gratuite/beau-papillon-dans-nature_23-2150765755.jpg',
        listImgs: ['https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOK_jbqp2_wJrC9xGgUmIk7JAdg19ot0Cz8ZN_d9ziW4spLqkkoVMATlGlYrKYC0_COs&usqp=CAU', 'https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg'],
        Technology: 'Flutter, Firebase, Agora Video Call, Consultations, Appointment, Ring',
        Description: 'Veteva is a mobile application that provides access to a consultation & communication with vet to its users. Consult with India’s top vets 24/7 within 10 minutes . Receive E-Prescription past consultation. Chat with the vet within 24 hours from consultation time. It is available for download on both Android and iOS devices. This app connects with the Veteva pro application that is related to vet.',
        Features: 'Rest API Integration, GIT, Firebase, Exotel, Appointment, Facebook events, CallKit, Chat',
        Android: 'https://play.google.com/store/apps/details?id=com.veteva.pet',
        IOS: 'https://apps.apple.com/us/app/veteva-consult-vets-24-7/id1642855776'
    },
    {
        name: 'VETEVA',
        displayImg: 'https://img.freepik.com/photos-gratuite/beau-papillon-dans-nature_23-2150765755.jpg',
        listImgs: ['https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOK_jbqp2_wJrC9xGgUmIk7JAdg19ot0Cz8ZN_d9ziW4spLqkkoVMATlGlYrKYC0_COs&usqp=CAU', 'https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg'],
        Technology: 'Flutter, Firebase, Agora Video Call, Consultations, Appointment, Ring',
        Description: 'Veteva is a mobile application that provides access to a consultation & communication with vet to its users. Consult with India’s top vets 24/7 within 10 minutes . Receive E-Prescription past consultation. Chat with the vet within 24 hours from consultation time. It is available for download on both Android and iOS devices. This app connects with the Veteva pro application that is related to vet.',
        Features: 'Rest API Integration, GIT, Firebase, Exotel, Appointment, Facebook events, CallKit, Chat',
        Android: 'https://play.google.com/store/apps/details?id=com.veteva.pet',
        IOS: 'https://apps.apple.com/us/app/veteva-consult-vets-24-7/id1642855776'
    },
    {
        name: 'VETEVA',
        displayImg: 'https://img.freepik.com/photos-gratuite/beau-papillon-dans-nature_23-2150765755.jpg',
        listImgs: ['https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOK_jbqp2_wJrC9xGgUmIk7JAdg19ot0Cz8ZN_d9ziW4spLqkkoVMATlGlYrKYC0_COs&usqp=CAU', 'https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg'],
        Technology: 'Flutter, Firebase, Agora Video Call, Consultations, Appointment, Ring',
        Description: 'Veteva is a mobile application that provides access to a consultation & communication with vet to its users. Consult with India’s top vets 24/7 within 10 minutes . Receive E-Prescription past consultation. Chat with the vet within 24 hours from consultation time. It is available for download on both Android and iOS devices. This app connects with the Veteva pro application that is related to vet.',
        Features: 'Rest API Integration, GIT, Firebase, Exotel, Appointment, Facebook events, CallKit, Chat',
        Android: 'https://play.google.com/store/apps/details?id=com.veteva.pet',
        IOS: 'https://apps.apple.com/us/app/veteva-consult-vets-24-7/id1642855776'
    },
    {
        name: 'VETEVA',
        displayImg: 'https://img.freepik.com/photos-gratuite/beau-papillon-dans-nature_23-2150765755.jpg',
        listImgs: ['https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOK_jbqp2_wJrC9xGgUmIk7JAdg19ot0Cz8ZN_d9ziW4spLqkkoVMATlGlYrKYC0_COs&usqp=CAU', 'https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg'],
        Technology: 'Flutter, Firebase, Agora Video Call, Consultations, Appointment, Ring',
        Description: 'Veteva is a mobile application that provides access to a consultation & communication with vet to its users. Consult with India’s top vets 24/7 within 10 minutes . Receive E-Prescription past consultation. Chat with the vet within 24 hours from consultation time. It is available for download on both Android and iOS devices. This app connects with the Veteva pro application that is related to vet.',
        Features: 'Rest API Integration, GIT, Firebase, Exotel, Appointment, Facebook events, CallKit, Chat',
        Android: 'https://play.google.com/store/apps/details?id=com.veteva.pet',
        IOS: 'https://apps.apple.com/us/app/veteva-consult-vets-24-7/id1642855776'
    },
]);
var __VLS_fnComponent = (await import('vue')).defineComponent({});
var __VLS_functionalComponentProps;
function __VLS_template() {
    var e_1, _a;
    var __VLS_ctx;
    /* Components */
    var __VLS_otherComponents;
    var __VLS_own;
    var __VLS_localComponents;
    var __VLS_components;
    var __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    var __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("fw-bold fs-2 d-flex align-items-center justify-content-center heder border-bottom") }, { style: ({}) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("bg-light row overflow-scroll p-0 m-0") }, { style: ({}) }));
    var _loop_1 = function (item, index) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var _b = __read(_a, 1), $event = _b[0];
                __VLS_ctx.goAboutPage(index);
                // @ts-ignore
                [data, goAboutPage,];
            } }, { key: ((index)) }), { class: ("col-md-4 h-400px p-4") }), { role: ("button") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("effect-parent position-relative d-flex justify-content-center") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign(__assign({ width: ("300"), height: ("400") }, { style: ({}) }), { src: ((item.displayImg)) }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("effect d-flex align-items-center justify-content-center rounded-3 text-white h-100 w-100") }));
        (item.name);
    };
    try {
        for (var _b = __values(__VLS_getVForSourceType((__VLS_ctx.data))), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), item = _d[0], index = _d[1];
            _loop_1(item, index);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['fw-bold'];
        __VLS_styleScopedClasses['fs-2'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['justify-content-center'];
        __VLS_styleScopedClasses['heder'];
        __VLS_styleScopedClasses['border-bottom'];
        __VLS_styleScopedClasses['bg-light'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['overflow-scroll'];
        __VLS_styleScopedClasses['p-0'];
        __VLS_styleScopedClasses['m-0'];
        __VLS_styleScopedClasses['col-md-4'];
        __VLS_styleScopedClasses['h-400px'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['effect-parent'];
        __VLS_styleScopedClasses['position-relative'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['justify-content-center'];
        __VLS_styleScopedClasses['effect'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['justify-content-center'];
        __VLS_styleScopedClasses['rounded-3'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['h-100'];
        __VLS_styleScopedClasses['w-100'];
    }
    var __VLS_slots;
    return __VLS_slots;
    var __VLS_componentsOption = {};
    var __VLS_name;
    var __VLS_defineComponent;
    var __VLS_internalComponent = __VLS_defineComponent({
        setup: function () {
            return {
                goAboutPage: goAboutPage,
                data: data,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
;
//# sourceMappingURL=HomeView.vue.js.map