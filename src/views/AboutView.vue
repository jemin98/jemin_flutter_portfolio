<template>
  <div>
    <div class="fw-bold fs-3 d-flex align-items-center heder px-4" style="height: 100px">
      <span class="mb-2" @click="goBack()"><svg role="button" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960"
          width="18">
          <path d="M655-80 255-480l400-400 56 57-343 343 343 343-56 57Z" />
        </svg></span>
      <div class="ms-2">{{ currentData.name }}</div>
    </div>
    <div class=" d-flex" style="height: calc(100vh - 100px)">
      <div class="col-md-6 mt-4 ps-4">
        <div class="d-flex justify-content-center align-items-center border border-1 rounded-3 p-4">
          <div class="" style="height: 400px; width: 250px">
            <img class="" width="300" height="400" :src="currentImg" />
          </div>
        </div>
        <div class="row gap-3 justify-content-center p-0 m-0 mt-3">
          <div v-for="(item,index) in currentData.listImgs" :key="index" @click="changeImg(item)"
            class="col-md-3 border border-1 p-2 rounded-3">
            <img class="w-100" :src="item" />
          </div>
        </div>
      </div>
      <div class="mt-4 px-5">
        <div class="d-flex border-bottom pb-3  mt-3">
          <div class="fw-bold col-md-3">Technology</div>
          <div>{{ currentData.Technology }}</div>
        </div>
        <div class="d-flex border-bottom pb-3  mt-3">
          <div class="fw-bold col-md-3">Description</div>
          <div>{{ currentData.Description }}</div>
        </div>
        <div class="d-flex border-bottom pb-3  mt-3">
          <div class="fw-bold col-md-3">Features</div>
          <div>{{ currentData.Features }}</div>
        </div>
        <div v-if="currentData.Android" class="d-flex border-bottom pb-3  mt-3">
          <div class="fw-bold col-md-3">Android</div>
          <div><a :href="currentData.Android">{{ currentData.Android }}</a></div>
        </div>
        <div v-if="currentData.IOS" class="d-flex border-bottom pb-3  mt-3">
          <div class="fw-bold col-md-3">IOS</div>
          <div><a :href="currentData.IOS">{{ currentData.IOS }}</a></div>
        </div>
      </div>
    </div>
  </div>
  <ModalsContainer ref="modalsContainerRef" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import ModalsContainer from '@/components/ModalsContainer.vue'


const data = ref([{
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
])
const route = useRoute()
const router = useRouter()
const index = <any>(route.params.index)
const currentData = data.value[index]
const currentImg = ref('https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg')
const modalsContainerRef = ref()

const changeImg = (item:any) => {
  currentImg.value = item
}

const goBack = () => {
  router.back();
};
</script>

<style>
.heder {
  position: sticky;
  z-index: 100
}
</style>
