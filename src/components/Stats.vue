<template>
    <div class="stats">
        <h2>Statistics</h2>
        <div class="head">
            <img src="../assets/dice.jpg" alt="">
        </div>
        <div class="stat">
            <h3 v-if="!plus.length && !minus.length">Enter your data</h3>
            <div class="plus" v-if="plus.length">
                <h3>Plus</h3>
                <p>Max: {{max(plus)}}</p>
                <p>Min: {{min(plus)}}</p>
                <p>Total: {{total(plus)  }}</p>
            </div>
            <div class="minus" v-if="minus.length">
                <h3>Minus</h3>
                <p>Max: {{ max(minus) }}</p>
                <p>Min: {{max(minus)  }}</p>
                <p>Total: {{total(minus)  }}</p>
            </div>
        </div>
        <div class="total" v-if="minus.length && plus.length">
            <h2>Total: {{total(plus)-total(minus)}}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['minus', 'plus'],
        data(){
            return{
            }
        },
        methods: {
            max(elem){
               let maximum = elem.reduce((a, b) => {
                    return Math.max(a, b['howMuch']) 
                }, Number.NEGATIVE_INFINITY)
                return maximum
            },
            min(elem, param){
                let minimum = elem.reduce((a, b) => {
                    return Math.min(a, b['howMuch']) 
                }, Number.POSITIVE_INFINITY)
                return minimum
            },
            total(elem){
                let reduction = elem.reduce((total, newValue) => {
                    return total + newValue['howMuch']
                }, 0);
                return reduction
            }
        }
    }
</script>

<style scoped>
.total{
    margin-top: 20px;
}
h2{
    text-align: center;
}
.stats{
    border: 3px solid orchid;
    font-family: 'Courier New', Courier, monospace;
    padding: 15px;
    display: flex;
    flex-direction: column;
    width: 700px;
}
.stat{
    margin-top: 20px;
    gap: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.minus, .plus{
    padding: 20px;
    width: 50%;
}
.plus{
    border: 2px solid rgb(94, 224, 144);
}
.minus{
    border: 2px solid rgb(240, 90, 90);
}
.show{
    width: 50%;
    height: 100%;
}
.head{
    display: flex;
    justify-content: center;
    align-items: center;
}
.head img{
    margin-top: 20px;
    width: 50%;
}
</style>