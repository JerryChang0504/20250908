<script setup>
import { ref } from 'vue'
const genderOptions = ref([])
const hobbyOptions = ref([])
const countryOptions = ref([])
</script>

<template>
  <div class="form-container">
    <h2>📝 個人資料表單</h2>

    <!-- 姓名 -->
    <div class="form-group">
      <label>姓名：</label>
      <input v-model="form?.name" placeholder="請輸入姓名" />
    </div>

    <!-- 性別 -->
    <div class="form-group">
      <label>性別：</label>
      <label v-for="(option, index) in genderOptions" :key="index">
        <input type="radio" :value="option" v-model="form?.gender" />
        {{ option }}
      </label>
    </div>

    <!-- 興趣 -->
    <div class="form-group">
      <label>興趣：</label>
      <label v-for="(interest, index) in hobbyOptions" :key="index">
        <input type="checkbox" :value="interest" v-model="form?.hobbies" />
        {{ interest }}
      </label>
    </div>

    <!-- 國家 -->
    <div class="form-group">
      <label>國家：</label>
      <select v-model="form?.country">
        <option disabled value="">請選擇</option>
        <option v-for="country in countryOptions" :key="country.code" :value="country?.numeric">
          {{ country.name }}
        </option>
      </select>
    </div>

    <!-- 送出按鈕 -->
    <button class="submit" @click="submit">送出</button>
    <button class="reset" @click="reset">重置</button>

    <!-- 顯示填寫結果 -->
    <div v-if="result" class="result">
      <h3>✔️ 填寫結果</h3>
      <p>姓名：{{ result.name }}</p>
      <p>性別：{{ result.gender }}</p>
      <p>興趣：{{ result.hobbies.join('、') }}</p>
      <p>國家代碼：{{ result.country }}</p>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  max-width: 500px;
  margin: auto;
  border: 2px solid #ccc;
  border-radius: 6px;
  padding: 20px;
  background: #f9f9f9;
}
.form-group {
  margin-bottom: 16px;
}
label {
  margin-right: 12px;
}
input,
select {
  padding: 6px;
  margin-top: 4px;
}

button {
  padding: 8px 16px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 8px;
}
.submit {
  background-color: #42b983;
}
.reset {
  background-color: #ee2e2e;
}

.result {
  margin-top: 24px;
  padding: 16px;
  background: #eaffea;
  border-left: 4px solid #42b983;
}
</style>
