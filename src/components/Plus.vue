<template>
    <div class="plus">
        <div class="create">
            <h2>Pluses</h2>
            <div class="head">
                <img src="../assets/benjamin.jpg" alt="">
            </div>
            <h3>What, how, when you earned</h3>
            <form class="form" @submit.prevent="addToPluses()">
                <input type="text" placeholder="Description" v-model="newPlus.description">
                <input type="number" min="1" v-model="newPlus.howMuch" placeholder="How much">
                <input type="date" v-model="newPlus.date" placeholder="When">
                <select name="" id="" v-model="newPlus.type">
                        <option value="source" selected disabled hidden>Source</option>
                        <option 
                            v-for="type in plusTypes"
                            :value="type">
                            {{type}}
                        </option>
                </select>
                <button type="submit">Save</button>
            </form>
        </div>
        
        <div class="show">
            <h3>Show the sources</h3>
            <h2 v-if="!plus.length">Enter some sources</h2>
            <div class="show_sources" v-if="plus.length">
                <div 
                    class="source" 
                    v-for="item in plus"
                >
                    <p><strong>Description:</strong>  {{ item.description }}</p>
                    <p><strong>How much:</strong>  {{ item.howMuch }}</p>
                    <p><strong>Date:</strong>  {{ item.date }}</p>
                    <p><strong>Type:</strong> {{ item.type }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['plus'],
        data(){
            return{
                newPlus: {
                    description: '',
                    howMuch: '',
                    date: '',
                    type: ''
                },
                plusTypes: ['Investment', 'Business shares', 'Cashback', 'Other']
            }
        },
        methods: {
            addToPluses(){
                if(this.newPlus.description != "" && this.newPlus.howMuch != '' && this.newPlus.date != '' && this.newPlus.type != ''){
                    this.plus.push({
                        description: this.newPlus.description,
                        howMuch: this.newPlus.howMuch,
                        date: this.newPlus.date,
                        type: this.newPlus.type
                    });
                    localStorage.setItem('plus', JSON.stringify(this.plus));
                    this.newPlus.description = "" 
                    this.newPlus.howMuch = ''  
                    this.newPlus.date = ''  
                    this.newPlus.type = ''
                }
                else {
                    alert('Plase fill in all the info')
                }
            }
        }
    }
</script>

<style scoped>
.plus{
    border: 3px solid orchid;
    font-family: 'Courier New', Courier, monospace;
    padding: 15px;
    display: flex;
    width: 700px;
}
.create{
    width: 40%;
}
.show{
    width: 60%;
    height: 100%;
}
.show_sources{
    max-height: 500px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
}
.source{
    border: 2px solid lightgreen;
    padding: 20px;
}
.head img{
    margin-top: 20px;
    width: 250px;
}
.head{
    display: flex;
    justify-content: center;
    align-items: center;
}
.form{
    border: 2px solid lightcoral;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    padding: 20px;
}
input, select, button{
    border: 1px solid blueviolet;
    padding: 10px;
    font-size: 1.01rem;
    border-radius: .8ch;
}
button{
    background-color: blueviolet;
    color: white;
}
</style>