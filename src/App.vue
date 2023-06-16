<script >
export default{
    data(){
        return{
            headerTitle: ['Plus', 'Minus', 'Stats'],
            plus: JSON.parse(localStorage.getItem('plus')) ?? [],
            minus: JSON.parse(localStorage.getItem('minus')) ?? [],
        }
    }
}
</script>

<template>
    <div class="main">
        <div class="main_content">
            <div class="header_links">
                    <router-link 
                    v-for="title in headerTitle"
                        class="header_link" 
                        :to="{path: `/${title}`}"
                    >
                        {{ title }}
                    </router-link>
            </div>
            <div class="main_data">
                <router-view
                    :minus="minus"
                    :plus="plus"
                >
                </router-view>
            </div>
        </div>
    </div>
</template>

<style>
h2, p{
    margin: 0;
    padding: 0;
}
a{
    text-decoration: none;
    color: black;
}
.main_content{
    align-items: center;
    display: flex;
    max-width: 1150px;
    padding: 25px;
    margin: 0 auto;
}
.header_links{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-size: 1.4rem;
}
.header_link{
    border: 2px solid orangered;
    padding: 20px;
    margin-bottom: 5px;
}
</style>