<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-04 09:11:41
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-04 09:23:34
--> 
<template>
  <div class="content">
    <ul class="items">
        <li class="order">我的订单</li>
        <li class="payback">我的退款</li>
        <li class="receipt">我的发票</li>
        <li class="plan">我的攻略</li>
      </ul>
      <ul class="items">
        <li class="email">意见反馈</li>
        <li class="question">关于去哪儿网</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'MeContent'
}
</script>

<style>
  .content {
    min-height: 13.52rem;
    background-color: #eee;
  }

  .items {
    border-bottom: .266667rem solid #eee;
    background-color: #fff;
  }

  .items li{
    height: 1.0rem;
    font-size: .32rem;
    padding-left: .693333rem;
    margin-left: .4rem;
    position: relative;
    border-bottom: .026667rem solid #e4e4e4;
    line-height: 1.2rem;
  }

  .items li::before {
    content: '';
    display: block;
    height: .426667rem;
    width: .426667rem;
    position: absolute;
    left: .026667rem;
    top: .373333rem;
    background-size: cover;
  }

  .order::before {
    background-image: url(../img/address.png);
  }

  .payback::before {
    background-image: url(../img/money.png);
  }
  .receipt::before {
    background-image: url(../img/address.png);
  }

  .plan::before {
    background-image: url(../img/money.png);
  }

  .email::before {
    background-image: url(../img/email.png);
  }

  .question::before {
    background-image: url(../img/question.png);
  }

  .items li::after {
    content: '>';
    display: block;
    width: .426667rem;
    height: .426667rem;
    position: absolute;
    top: 0rem;
    right: .16rem;
    color: #aaa;
  }

  .items li:last-child {
    border: none;
  }
</style>