<script setup lang="ts">
import CartCard from '../components/CartCard.vue';
import Header from '../components/Header.vue';

</script>
<template>
    <main class=" px-[80px]">
        <Header
            header-text="Browse through top Manuscripts from our Writters"
        />
        <div class="grid grid-cols-4 mt-10">
            <RouterLink to="/buy">
                <CartCard
                    image="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="La grève des Bàttu"
                    author="Aminata Sow Fall"
                />
            </RouterLink>
            <RouterLink to="/buy">
                <CartCard
                    image="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="La grève des Bàttu"
                    author="Aminata Sow Fall"
                />
            </RouterLink>
            <RouterLink to="/buy">
                <CartCard
                    image="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="After Moonlight"
                    author="La grève des Bàttu"
                />
            </RouterLink>
            <RouterLink to="/buy">
                <CartCard
                    image="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="After Moonlight"
                    author="La grève des Bàttu"
                />
            </RouterLink>
        </div>
    </main>
</template>