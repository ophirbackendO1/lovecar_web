<template>
    <div class="flex justify-center items-center" style="height: 70vh">
        <div class="border p-3 rounded-lg">
            <div class="text-center font-bold fs-3 mt-3">
                Account delete successfully
            </div>
            <div class="text-muted text-center mt-3">
                Your account has been deleted. <br>Your account will be deleted after 14 days and your all data will be
                deleted too.
            </div>
            <div class="flex justify-center mt-4">
                <RouterLink to="/">
                    <button class="btn btn-primary rounded-lg shadow-sm px-5">Okay</button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style></style>