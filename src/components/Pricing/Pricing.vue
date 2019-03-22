<template>
<div class="main__container">
  <div class="text__item-container">
    <h2 class="pricing__heading">Simple pricing</h2>
    <p class="pricing__paragraph">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor lectus nibh. Curabitur arcu erat, accumsan..</p>
    <div class="user__story-container">
        <div class="avatar">
            <img src="../../assets/Pricing/User-avatar.png" alt="">
        </div>
        <div class="paragraph">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
        </div>
    </div>
  </div>
    <div class="card1">
        <h3 class="card__heading">FREE</h3>
        <ul class="card__list">
            <li>Unlimited Access</li>
            <li>5,000 Subscribers</li>
            <li>Custom domain</li>
            <li>PayPal and credit card payments</li>
            <li>Instant payouts</li>
            <li>Website & conversion tracking</li>
        </ul>
        <Cta>Sign Up</Cta>
    </div>

    <div class="card2">
        <h3 class="card__heading">Premium</h3>
        <ul class="card__list">
            <li>Better permissions</li>
            <li>All integration</li>
            <li>Unlimited Access</li>
            <li>30,000 Subscribers</li>
            <li>Custom domain</li>
            <li>PayPal & credit card payments</li>
            <li>Instant payouts</li>
            <li>Website & conversion tracking</li>
            <li>99.9% uptime SLA</li>
            <li>Basic support via email</li>
        </ul>
        <Cta>Sign Up</Cta>
    </div>

</div>
</template>
<style scoped>
.main__container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.text__item-container {
    width: 35rem;
}
.user__story-container {
    display: flex;
}

.card1 {
    margin-left: 8rem;
}
.card1, .card2 {
    background: #fff;
    font-size: 1.5rem;
    padding: 2.5rem;
    text-align: center;
    border-radius: 3px;
    box-shadow: 0 1.5rem 1.5rem rgba(108, 99, 255, .2);
    transition: transform .3s;
    color: black
}
.card2:hover {
    transform: translateY(-1.5rem) scale(1.1);
}
.card__list {
    list-style: none;
    text-align: center;
    margin-right: 3.5rem;
    color: grey;
    line-height: 4rem;
}

.card__heading {
    font-size: 3rem;
    margin-bottom: 2rem;
}

.content__button {
    color: #fff;
    background: #6C63FF;
    margin-bottom: 2rem;
}

.pricing__heading {
    font-size: 3rem;
}

.pricing__paragraph {
    font-size: 1.4rem;
    color: grey;
}
.user__story-container {
    margin-top: 7rem;
}
.paragraph {
    margin-left: 2rem;
    color: grey;
}
</style>