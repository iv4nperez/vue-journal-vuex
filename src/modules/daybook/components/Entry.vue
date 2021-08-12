<template>
    <div
        class="entry-container mb-3 pointer p-2"
        @click="$router.push({ name:'entry', params:{ id:10 }})"
    >
        <!-- Titulo -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold" >15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2021, Jueves</span>
        </div>

        <div class="entry-description">
           Deserunt tempor incididunt irure incididunt adipisicing labore veniam irure ex sunt esse excepteur laborum pariatur. Velit aliqua Lorem commodo esse laborum et amet et ullamco eiusmod sunt culpa adipisicing fugiat. Mollit ea elit duis occaecat tempor consectetur laboris magna ea consequat labore irure ad. Laborum ad non amet veniam eiusmod consequat ullamco ut Lorem deserunt. Quis id ex culpa veniam sit commodo do voluptate ipsum. Laborum ex laboris consequat nostrud voluptate tempor minim ut quis anim qui amet laborum do. Cillum aute cupidatat aute et nostrud pariatur sit consectetur consequat consectetur fugiat laboris. 
        </div>
    </div>
</template>

<style lang="scss" scoped>
.entry-description {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease;

    &:hover{
        background: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease;
    }
    .entry-description{
        font-size: 12px;
    }
}



</style>