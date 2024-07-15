<template>
  <div>
    <div class="fw-bold fs-2 d-flex align-items-center justify-content-center heder border-bottom" style="height: 100px">
      FLUTTER
    </div>
    <div class="bg-light row overflow-scroll p-0 m-0" style="height: calc(100vh - 100px)">
      <div v-for="(item, index) in data" :key="index" class="col-md-4 h-400px p-4" role="button" @click="goAboutPage(index)">
        <div  class="effect-parent position-relative d-flex justify-content-center">
          <img width="300" height="400" style="object-fit: fill;"
            :src="item.displayImg" />
          <div class="effect d-flex align-items-center justify-content-center rounded-3 text-white h-100 w-100">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()


const goAboutPage = (index:any) => {
  router.push({
    name: 'about',
    params: {index: index}
  })
}

const data = ref([{
  name: 'VETEVA',
  displayImg: '/favicon.ico',
  listImgs: ['https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOK_jbqp2_wJrC9xGgUmIk7JAdg19ot0Cz8ZN_d9ziW4spLqkkoVMATlGlYrKYC0_COs&usqp=CAU','https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg'],
  Technology: 'Flutter, Firebase, Agora Video Call, Consultations, Appointment, Ring',
  Description: 'Veteva is a mobile application that provides access to a consultation & communication with vet to its users. Consult with India’s top vets 24/7 within 10 minutes . Receive E-Prescription past consultation. Chat with the vet within 24 hours from consultation time. It is available for download on both Android and iOS devices. This app connects with the Veteva pro application that is related to vet.',
  Features: 'Rest API Integration, GIT, Firebase, Exotel, Appointment, Facebook events, CallKit, Chat',
  Android: 'https://play.google.com/store/apps/details?id=com.veteva.pet',
  IOS: 'https://apps.apple.com/us/app/veteva-consult-vets-24-7/id1642855776'  
},
{
  name: 'VETEVA',
  displayImg: 'https://img.freepik.com/photos-gratuite/beau-papillon-dans-nature_23-2150765755.jpg',
  listImgs: ['https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOK_jbqp2_wJrC9xGgUmIk7JAdg19ot0Cz8ZN_d9ziW4spLqkkoVMATlGlYrKYC0_COs&usqp=CAU','https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg'],
  Technology: 'Flutter, Firebase, Agora Video Call, Consultations, Appointment, Ring',
  Description: 'Veteva is a mobile application that provides access to a consultation & communication with vet to its users. Consult with India’s top vets 24/7 within 10 minutes . Receive E-Prescription past consultation. Chat with the vet within 24 hours from consultation time. It is available for download on both Android and iOS devices. This app connects with the Veteva pro application that is related to vet.',
  Features: 'Rest API Integration, GIT, Firebase, Exotel, Appointment, Facebook events, CallKit, Chat',
  Android: 'https://play.google.com/store/apps/details?id=com.veteva.pet',
  IOS: 'https://apps.apple.com/us/app/veteva-consult-vets-24-7/id1642855776'  
},
{
  name: 'VETEVA',
  displayImg: 'https://img.freepik.com/photos-gratuite/beau-papillon-dans-nature_23-2150765755.jpg',
  listImgs: ['https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOK_jbqp2_wJrC9xGgUmIk7JAdg19ot0Cz8ZN_d9ziW4spLqkkoVMATlGlYrKYC0_COs&usqp=CAU','https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg'],
  Technology: 'Flutter, Firebase, Agora Video Call, Consultations, Appointment, Ring',
  Description: 'Veteva is a mobile application that provides access to a consultation & communication with vet to its users. Consult with India’s top vets 24/7 within 10 minutes . Receive E-Prescription past consultation. Chat with the vet within 24 hours from consultation time. It is available for download on both Android and iOS devices. This app connects with the Veteva pro application that is related to vet.',
  Features: 'Rest API Integration, GIT, Firebase, Exotel, Appointment, Facebook events, CallKit, Chat',
  Android: 'https://play.google.com/store/apps/details?id=com.veteva.pet',
  IOS: 'https://apps.apple.com/us/app/veteva-consult-vets-24-7/id1642855776'  
},
{
  name: 'VETEVA',
  displayImg: 'https://img.freepik.com/photos-gratuite/beau-papillon-dans-nature_23-2150765755.jpg',
  listImgs: ['https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOK_jbqp2_wJrC9xGgUmIk7JAdg19ot0Cz8ZN_d9ziW4spLqkkoVMATlGlYrKYC0_COs&usqp=CAU','https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg'],
  Technology: 'Flutter, Firebase, Agora Video Call, Consultations, Appointment, Ring',
  Description: 'Veteva is a mobile application that provides access to a consultation & communication with vet to its users. Consult with India’s top vets 24/7 within 10 minutes . Receive E-Prescription past consultation. Chat with the vet within 24 hours from consultation time. It is available for download on both Android and iOS devices. This app connects with the Veteva pro application that is related to vet.',
  Features: 'Rest API Integration, GIT, Firebase, Exotel, Appointment, Facebook events, CallKit, Chat',
  Android: 'https://play.google.com/store/apps/details?id=com.veteva.pet',
  IOS: 'https://apps.apple.com/us/app/veteva-consult-vets-24-7/id1642855776'  
},
{
  name: 'VETEVA',
  displayImg: 'https://img.freepik.com/photos-gratuite/beau-papillon-dans-nature_23-2150765755.jpg',
  listImgs: ['https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOK_jbqp2_wJrC9xGgUmIk7JAdg19ot0Cz8ZN_d9ziW4spLqkkoVMATlGlYrKYC0_COs&usqp=CAU','https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg'],
  Technology: 'Flutter, Firebase, Agora Video Call, Consultations, Appointment, Ring',
  Description: 'Veteva is a mobile application that provides access to a consultation & communication with vet to its users. Consult with India’s top vets 24/7 within 10 minutes . Receive E-Prescription past consultation. Chat with the vet within 24 hours from consultation time. It is available for download on both Android and iOS devices. This app connects with the Veteva pro application that is related to vet.',
  Features: 'Rest API Integration, GIT, Firebase, Exotel, Appointment, Facebook events, CallKit, Chat',
  Android: 'https://play.google.com/store/apps/details?id=com.veteva.pet',
  IOS: 'https://apps.apple.com/us/app/veteva-consult-vets-24-7/id1642855776'  
},
{
  name: 'VETEVA',
  displayImg: 'https://img.freepik.com/photos-gratuite/beau-papillon-dans-nature_23-2150765755.jpg',
  listImgs: ['https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOK_jbqp2_wJrC9xGgUmIk7JAdg19ot0Cz8ZN_d9ziW4spLqkkoVMATlGlYrKYC0_COs&usqp=CAU','https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg'],
  Technology: 'Flutter, Firebase, Agora Video Call, Consultations, Appointment, Ring',
  Description: 'Veteva is a mobile application that provides access to a consultation & communication with vet to its users. Consult with India’s top vets 24/7 within 10 minutes . Receive E-Prescription past consultation. Chat with the vet within 24 hours from consultation time. It is available for download on both Android and iOS devices. This app connects with the Veteva pro application that is related to vet.',
  Features: 'Rest API Integration, GIT, Firebase, Exotel, Appointment, Facebook events, CallKit, Chat',
  Android: 'https://play.google.com/store/apps/details?id=com.veteva.pet',
  IOS: 'https://apps.apple.com/us/app/veteva-consult-vets-24-7/id1642855776'  
},
{
  name: 'VETEVA',
  displayImg: 'https://img.freepik.com/photos-gratuite/beau-papillon-dans-nature_23-2150765755.jpg',
  listImgs: ['https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOK_jbqp2_wJrC9xGgUmIk7JAdg19ot0Cz8ZN_d9ziW4spLqkkoVMATlGlYrKYC0_COs&usqp=CAU','https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg'],
  Technology: 'Flutter, Firebase, Agora Video Call, Consultations, Appointment, Ring',
  Description: 'Veteva is a mobile application that provides access to a consultation & communication with vet to its users. Consult with India’s top vets 24/7 within 10 minutes . Receive E-Prescription past consultation. Chat with the vet within 24 hours from consultation time. It is available for download on both Android and iOS devices. This app connects with the Veteva pro application that is related to vet.',
  Features: 'Rest API Integration, GIT, Firebase, Exotel, Appointment, Facebook events, CallKit, Chat',
  Android: 'https://play.google.com/store/apps/details?id=com.veteva.pet',
  IOS: 'https://apps.apple.com/us/app/veteva-consult-vets-24-7/id1642855776'  
},
{
  name: 'VETEVA',
  displayImg: 'https://img.freepik.com/photos-gratuite/beau-papillon-dans-nature_23-2150765755.jpg',
  listImgs: ['https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOK_jbqp2_wJrC9xGgUmIk7JAdg19ot0Cz8ZN_d9ziW4spLqkkoVMATlGlYrKYC0_COs&usqp=CAU','https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg'],
  Technology: 'Flutter, Firebase, Agora Video Call, Consultations, Appointment, Ring',
  Description: 'Veteva is a mobile application that provides access to a consultation & communication with vet to its users. Consult with India’s top vets 24/7 within 10 minutes . Receive E-Prescription past consultation. Chat with the vet within 24 hours from consultation time. It is available for download on both Android and iOS devices. This app connects with the Veteva pro application that is related to vet.',
  Features: 'Rest API Integration, GIT, Firebase, Exotel, Appointment, Facebook events, CallKit, Chat',
  Android: 'https://play.google.com/store/apps/details?id=com.veteva.pet',
  IOS: 'https://apps.apple.com/us/app/veteva-consult-vets-24-7/id1642855776'  
},
{
  name: 'VETEVA',
  displayImg: 'https://img.freepik.com/photos-gratuite/beau-papillon-dans-nature_23-2150765755.jpg',
  listImgs: ['https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOK_jbqp2_wJrC9xGgUmIk7JAdg19ot0Cz8ZN_d9ziW4spLqkkoVMATlGlYrKYC0_COs&usqp=CAU','https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg'],
  Technology: 'Flutter, Firebase, Agora Video Call, Consultations, Appointment, Ring',
  Description: 'Veteva is a mobile application that provides access to a consultation & communication with vet to its users. Consult with India’s top vets 24/7 within 10 minutes . Receive E-Prescription past consultation. Chat with the vet within 24 hours from consultation time. It is available for download on both Android and iOS devices. This app connects with the Veteva pro application that is related to vet.',
  Features: 'Rest API Integration, GIT, Firebase, Exotel, Appointment, Facebook events, CallKit, Chat',
  Android: 'https://play.google.com/store/apps/details?id=com.veteva.pet',
  IOS: 'https://apps.apple.com/us/app/veteva-consult-vets-24-7/id1642855776'  
},
{
  name: 'VETEVA',
  displayImg: 'https://img.freepik.com/photos-gratuite/beau-papillon-dans-nature_23-2150765755.jpg',
  listImgs: ['https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFOK_jbqp2_wJrC9xGgUmIk7JAdg19ot0Cz8ZN_d9ziW4spLqkkoVMATlGlYrKYC0_COs&usqp=CAU','https://img.freepik.com/photos-premium/beau-papillon-dans-nature_1003721-290.jpg?size=626&ext=jpg'],
  Technology: 'Flutter, Firebase, Agora Video Call, Consultations, Appointment, Ring',
  Description: 'Veteva is a mobile application that provides access to a consultation & communication with vet to its users. Consult with India’s top vets 24/7 within 10 minutes . Receive E-Prescription past consultation. Chat with the vet within 24 hours from consultation time. It is available for download on both Android and iOS devices. This app connects with the Veteva pro application that is related to vet.',
  Features: 'Rest API Integration, GIT, Firebase, Exotel, Appointment, Facebook events, CallKit, Chat',
  Android: 'https://play.google.com/store/apps/details?id=com.veteva.pet',
  IOS: 'https://apps.apple.com/us/app/veteva-consult-vets-24-7/id1642855776'  
},
])
</script>

<style scoped>
.effect-parent:hover .effect {
  opacity: 1
}

.effect {
  background: rgba(35, 33, 33, 0.49);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(35, 33, 33, 0.3);
  position: absolute;
  transition: all .2s ease-in-out;
  top: 0;
  z-index: 100;
  opacity: 0;
}

.heder {
  position: sticky;
  z-index: 100
}
</style>