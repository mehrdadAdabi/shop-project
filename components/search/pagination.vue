<template>
    <div class="paging">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
    </div>
</template>


<style>
.paging {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 50px 0;
}

.paging span {
    display: flex;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    border: var(--border);
    justify-content: center;
    align-items: center;
    transition: var(--transition);
}

.paging span:hover{
    background-color: var(--hover);
    transition: var(--transition);
    color: var(--mainColor);
}

</style>