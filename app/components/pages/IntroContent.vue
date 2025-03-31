<template>
    <AppContainer>
        <h1>
            <slot name="title" />
        </h1>
        <p class="max-w-lg text-gray-400">
            <slot name="description" />
        </p>
    </AppContainer>
</template>