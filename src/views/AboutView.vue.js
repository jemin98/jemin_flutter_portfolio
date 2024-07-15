import { __assign, __read, __spreadArray, __values } from "tslib";
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ModalsContainer from '@/components/ModalsContainer.vue';
var _a = await import('vue'), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var data = ref([{
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
var route = useRoute();
var router = useRouter();
var index = (route.params.index);
var currentData = data.value[index];
var currentImg = ref('https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg');
var modalsContainerRef = ref();
var changeImg = function (item) {
    currentImg.value = item;
};
var goBack = function () {
    router.back();
};
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("fw-bold fs-3 d-flex align-items-center heder px-4") }, { style: ({}) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var _b = __read(_a, 1), $event = _b[0];
            __VLS_ctx.goBack();
            // @ts-ignore
            [goBack,];
        } }, { class: ("mb-2") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ role: ("button"), xmlns: ("http://www.w3.org/2000/svg"), height: ("18"), viewBox: ("0 -960 960 960"), width: ("18"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M655-80 255-480l400-400 56 57-343 343 343 343-56 57Z"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("ms-2") }));
    (__VLS_ctx.currentData.name);
    // @ts-ignore
    [currentData,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: (" d-flex") }, { style: ({}) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("col-md-6 mt-4 ps-4") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("d-flex justify-content-center align-items-center border border-1 rounded-3 p-4") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("") }, { style: ({}) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ class: ("") }, { width: ("300"), height: ("400"), src: ((__VLS_ctx.currentImg)) }));
    // @ts-ignore
    [currentImg,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("row gap-3 justify-content-center p-0 m-0 mt-3") }));
    var _loop_1 = function (item, index_1) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var _b = __read(_a, 1), $event = _b[0];
                __VLS_ctx.changeImg(item);
                // @ts-ignore
                [currentData, changeImg,];
            } }, { key: ((index_1)) }), { class: ("col-md-3 border border-1 p-2 rounded-3") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ class: ("w-100") }, { src: ((item)) }));
    };
    try {
        for (var _b = __values(__VLS_getVForSourceType((__VLS_ctx.currentData.listImgs))), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), item = _d[0], index_1 = _d[1];
            _loop_1(item, index_1);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("mt-4 px-5") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("d-flex border-bottom pb-3  mt-3") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("fw-bold col-md-3") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    (__VLS_ctx.currentData.Technology);
    // @ts-ignore
    [currentData,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("d-flex border-bottom pb-3  mt-3") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("fw-bold col-md-3") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    (__VLS_ctx.currentData.Description);
    // @ts-ignore
    [currentData,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("d-flex border-bottom pb-3  mt-3") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("fw-bold col-md-3") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    (__VLS_ctx.currentData.Features);
    // @ts-ignore
    [currentData,];
    if (__VLS_ctx.currentData.Android) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("d-flex border-bottom pb-3  mt-3") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("fw-bold col-md-3") }));
        // @ts-ignore
        [currentData,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((__VLS_ctx.currentData.Android)), });
        (__VLS_ctx.currentData.Android);
        // @ts-ignore
        [currentData, currentData,];
    }
    if (__VLS_ctx.currentData.IOS) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("d-flex border-bottom pb-3  mt-3") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("fw-bold col-md-3") }));
        // @ts-ignore
        [currentData,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((__VLS_ctx.currentData.IOS)), });
        (__VLS_ctx.currentData.IOS);
        // @ts-ignore
        [currentData, currentData,];
    }
    // @ts-ignore
    [ModalsContainer,];
    // @ts-ignore
    var __VLS_0 = __VLS_asFunctionalComponent(ModalsContainer, new ModalsContainer({ ref: ("modalsContainerRef"), }));
    var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{ ref: ("modalsContainerRef"), }], __read(__VLS_functionalComponentArgsRest(__VLS_0)), false));
    ({}({ ref: ("modalsContainerRef"), }));
    // @ts-ignore
    (__VLS_ctx.modalsContainerRef);
    // @ts-ignore
    [modalsContainerRef,];
    var __VLS_4 = __VLS_pickFunctionalComponentCtx(ModalsContainer, __VLS_1);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses[''];
        __VLS_styleScopedClasses['fw-bold'];
        __VLS_styleScopedClasses['fs-3'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['heder'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['ms-2'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['col-md-6'];
        __VLS_styleScopedClasses['mt-4'];
        __VLS_styleScopedClasses['ps-4'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['justify-content-center'];
        __VLS_styleScopedClasses['align-items-center'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-1'];
        __VLS_styleScopedClasses['rounded-3'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['row'];
        __VLS_styleScopedClasses['gap-3'];
        __VLS_styleScopedClasses['justify-content-center'];
        __VLS_styleScopedClasses['p-0'];
        __VLS_styleScopedClasses['m-0'];
        __VLS_styleScopedClasses['mt-3'];
        __VLS_styleScopedClasses['col-md-3'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-1'];
        __VLS_styleScopedClasses['p-2'];
        __VLS_styleScopedClasses['rounded-3'];
        __VLS_styleScopedClasses['w-100'];
        __VLS_styleScopedClasses['mt-4'];
        __VLS_styleScopedClasses['px-5'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['border-bottom'];
        __VLS_styleScopedClasses['pb-3'];
        __VLS_styleScopedClasses['mt-3'];
        __VLS_styleScopedClasses['fw-bold'];
        __VLS_styleScopedClasses['col-md-3'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['border-bottom'];
        __VLS_styleScopedClasses['pb-3'];
        __VLS_styleScopedClasses['mt-3'];
        __VLS_styleScopedClasses['fw-bold'];
        __VLS_styleScopedClasses['col-md-3'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['border-bottom'];
        __VLS_styleScopedClasses['pb-3'];
        __VLS_styleScopedClasses['mt-3'];
        __VLS_styleScopedClasses['fw-bold'];
        __VLS_styleScopedClasses['col-md-3'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['border-bottom'];
        __VLS_styleScopedClasses['pb-3'];
        __VLS_styleScopedClasses['mt-3'];
        __VLS_styleScopedClasses['fw-bold'];
        __VLS_styleScopedClasses['col-md-3'];
        __VLS_styleScopedClasses['d-flex'];
        __VLS_styleScopedClasses['border-bottom'];
        __VLS_styleScopedClasses['pb-3'];
        __VLS_styleScopedClasses['mt-3'];
        __VLS_styleScopedClasses['fw-bold'];
        __VLS_styleScopedClasses['col-md-3'];
    }
    var __VLS_slots;
    return __VLS_slots;
    var __VLS_componentsOption = {};
    var __VLS_name;
    var __VLS_defineComponent;
    var __VLS_internalComponent = __VLS_defineComponent({
        setup: function () {
            return {
                ModalsContainer: ModalsContainer,
                currentData: currentData,
                currentImg: currentImg,
                modalsContainerRef: modalsContainerRef,
                changeImg: changeImg,
                goBack: goBack,
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
//# sourceMappingURL=AboutView.vue.js.map