// Здесь должна была быть валидация при помощи vee-validate и zod, но что-то пошло не так (честно, я
пытался)
<script setup>
import { ref, reactive } from 'vue'

// Объявление события modal-close, которое может сгенерировано компонентом для родителя
const emit = defineEmits(['closeModal'])

const formData = reactive({
  post: {
    value: '',
    error: { value: false, message: 'Поле обязательно для заполнения' },
    isRequired: true
  },
  name: {
    value: '',
    error: { value: false, message: 'Поле обязательно для заполнения' },
    isRequired: true
  },
  email: {
    value: '',
    error: { value: false, message: 'Email введен некорректно' },
    isRequired: false
  },
  phone: {
    value: '',
    error: { value: false, message: 'Некорректный номер телефона' },
    isRequired: true
  },
  education: {
    value: '',
    error: { value: false, message: 'Поле обязательно для заполнения' },
    isRequired: true
  },
  address: {
    value: '',
    error: { value: false, message: 'Поле обязательно для заполнения' },
    isRequired: true
  },
  birthDate: { value: '', error: { value: false, message: '' }, isRequired: false },
  file: { value: null, error: { value: false, message: 'Загрузите файл' }, isRequired: true },
  comment: { value: '', error: { value: false, message: '' }, isRequired: false },
  agreement: { value: false }
})

// Проверка валидности формы
const isValid = ref(true)

// Отслеживание изменений в инпутах
const onTextChange = (field) => {
  isValid.value = true
  const text = formData[field].value

  if (text.length < 1) {
    formData[field].error.value = true
  } else {
    formData[field].error.value = false
  }
}

const onEmailChange = () => {
  isValid.value = true
  const regex = /^\w+@\w+\.(com|ru)$/
  const email = formData.email.value

  if (!regex.test(email)) {
    formData.email.error.value = true
  } else {
    formData.email.error.value = false
  }
}

const onPhoneChange = () => {
  isValid.value = true
  const regex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/
  const phoneNumber = formData.phone.value

  if (!regex.test(phoneNumber)) {
    formData.phone.error.value = true
  } else {
    formData.phone.error.value = false
  }
}

const onFileChange = (event) => {
  isValid.value = true
  const file = event.target.files[0]
  formData.file.value = file
  if (!formData.file.value) {
    formData.file.error.value = true
  } else {
    formData.file.error.value = false
  }
}

// Функция для удаления файла
const clearFile = () => {
  formData.file.value = null
}

const validateForm = () => {
  isValid.value = true

  for (const field in formData) {
    if (field !== 'agreement') {
      if (
        (formData[field].value === '' || formData[field].value === null) &&
        formData[field].isRequired
      ) {
        formData[field].error.value = true
      } else {
        formData[field].error.value = false
      }
    }
  }

  for (const field in formData) {
    if (field !== 'agreement') {
      if (formData[field].error.value) {
        isValid.value = false
        break
      }
    }
  }
}

const submitForm = () => {
  validateForm()
  if (isValid.value) {
    console.log(formData)
    // Дальнейшая логика для обработки данных формы
  }
}
</script>

<template>
  <div class="form-call__container">
    <form @submit.prevent="submitForm" class="form-call__wrapper">
      <h2 class="form-call__title">Отклик на вакансию</h2>
      <!-- Поле вакансии -->
      <div class="form-call__input-container">
        <label for="post">Желаемая вакансия*</label>
        <input
          placeholder="Желаемая вакансия*"
          v-model="formData.post.value"
          name="post"
          id="post"
          type="text"
          class="form-call__input form-call__input_text"
          @input="onTextChange('post')"
        />
        <span v-if="formData.post.error.value" class="error">{{
          formData.post.error.message
        }}</span>
      </div>
      <!-- Поле ФИО -->
      <div class="form-call__input-container">
        <label for="name">Фамилия, имя и отчество*</label>
        <input
          placeholder="Фамилия, имя и отчество*"
          v-model="formData.name.value"
          name="name"
          id="name"
          type="text"
          class="form-call__input form-call__input_text"
          @input="onTextChange('name')"
        />
        <span v-if="formData.name.error.value" class="error">{{
          formData.name.error.message
        }}</span>
      </div>
      <!-- Поле мобильного телефона -->
      <div class="form-call__double-container">
        <div class="form-call__input-container form-call__input-container_phone">
          <label for="phone">Мобильный телефон*</label>
          <MaskInput
            mask="+7 (###) ###-##-##"
            placeholder="+7"
            id="phone"
            type="text"
            name="phone"
            class="form-call__input form-call__input_text"
            v-model="formData.phone.value"
            @input="onPhoneChange"
          />
          <span v-if="formData.phone.error.value" class="error">{{
            formData.phone.error.message
          }}</span>
        </div>
        <!-- Поле email -->
        <div class="form-call__input-container">
          <label for="email">E-mail*</label>
          <input
            placeholder="E-mail*"
            v-model="formData.email.value"
            name="email"
            id="email"
            type="text"
            class="form-call__input form-call__input_text"
            @input="onEmailChange"
          />
          <span v-if="formData.email.error.value" class="error">{{
            formData.email.error.message
          }}</span>
        </div>
      </div>
      <!-- Поле образования -->
      <div class="form-call__input-container">
        <label for="education">Образование*</label>
        <input
          placeholder="Образование*"
          v-model="formData.education.value"
          name="education"
          id="education"
          type="text"
          class="form-call__input form-call__input_text"
          @input="onTextChange('education')"
        />
        <span v-if="formData.education.error.value" class="error">{{
          formData.education.error.message
        }}</span>
      </div>
      <!-- Поле адреса -->
      <div class="form-call__input-container">
        <label for="address">Адрес места жительства*</label>
        <input
          placeholder="Адрес места жительства*"
          v-model="formData.address.value"
          name="address"
          id="address"
          type="text"
          class="form-call__input form-call__input_text"
          @input="onTextChange('address')"
        />
        <span v-if="formData.address.error.value" class="error">{{
          formData.address.error.message
        }}</span>
      </div>
      <!-- Поле даты рождения -->
      <div class="form-call__double-container">
        <div class="form-call__input-container form-call__input-container_birthday">
          <label for="birthday">Дата рождения</label>
          <input
            v-model="formData.birthDate.value"
            name="birthday"
            id="birthday"
            type="date"
            class="form-call__input form-call__input_date"
          />
        </div>
        <!-- Поле загрузки файла -->
        <div class="form-call__input-container form-call__input-container_file">
          <span v-if="formData.file.value">{{ formData.file.value.name }}</span>
          <label v-if="!formData.file.value" for="file">Загрузить резюме</label>
          <input
            name="file"
            id="file"
            type="file"
            class="form-call__input"
            @change="onFileChange"
          />
          <span v-if="formData.file.error.value" class="error">{{
            formData.file.error.message
          }}</span>
          <div v-if="formData.file.value" class="remove-file-button__container" @click="clearFile">
            <icon name="file-delete-icon" />
          </div>
        </div>
      </div>
      <!-- Поле комментария -->
      <div class="form-call__input-container">
        <label for="comments">Комментарий</label>
        <textarea
          as="textarea"
          placeholder="Комментарий"
          v-model="formData.comment.value"
          name="comments"
          id="comments"
          type="text"
          class="form-call__input form-call__input_comments"
        />
      </div>
      <!-- Поле чекбокса -->
      <div class="form-call__submit-box">
        <label class="form-call__agreement-container">
          Я принимаю условия <a href="">передачи информации</a>
          <input
            name="agreement"
            v-model="formData.agreement.value"
            type="checkbox"
            class="form-call__checkbox"
          />
          <span class="checkmark"></span>
        </label>
        <button :disabled="!isValid" class="form-call__submit-button">Отправить</button>
      </div>

      <button @click="emit('closeModal')" class="form-call__close-button">
        <icon name="close-icon" />
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.form-call__container {
  width: 68vw;
  background: $white;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vh 0;
}

.form-call__wrapper {
  width: 62%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 103px 0 65px 0;
}

.form-call__title {
  font-size: 36px;
  line-height: 42px;
  font-family: 'HeliosC Bold';
  margin-bottom: 57px;
  align-self: start;
}

.form-call__double-container {
  width: 100%;
  display: flex;
  gap: 5px;

  & > .form-call__input-container {
    max-width: calc(50% - 2.5px);
  }

  & > .form-call__input-container_birthday {
    width: 37%;
    margin-right: 29px;
  }
}

.form-call__input-container {
  display: flex;
  position: relative;
  width: 100%;
  margin-bottom: 32px;

  & label {
    display: none;
  }

  &:has(input:focus) {
    & input {
      padding: 35px 0 15px 28px;
    }

    & label {
      display: block;
      position: absolute;
      top: 10px;
      left: 28px;
      font-size: 14px;
      line-height: 20px;
      color: #828282;
    }
  }

  &:has(span.error) {
    border: 1px solid #be1a1a;
  }
}

.form-call__input {
  width: 100%;
  padding: 25px 28px;
  line-height: 20px;
  color: $dark;
  background: #f2f2f2;
  border: 1px solid #e0e0e0;

  &:focus {
    background: $white;
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }

  &_comments {
    min-height: 150px;
    resize: none;
  }
}

.form-call__input-container_birthday {
  & label {
    display: block;
    position: absolute;
    top: 25px;
    left: 28px;
    font-size: 16px;
    line-height: 20px;
    color: #828282;
  }
}

.form-call__input_date {
  &::-webkit-calendar-picker-indicator {
    background: url('@/assets/images/calendar-icon.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 16px;
    top: calc(50% - 8px);
    right: 18px;
    cursor: pointer;
    position: absolute;
    opacity: 1;
  }

  &::-webkit-input-placeholder {
    min-height: 14px;
  }

  &:focus::-webkit-calendar-picker-indicator {
    top: calc(50% - 8px);
  }

  &::-webkit-datetime-edit {
    opacity: 0;
  }

  &:focus::-webkit-datetime-edit {
    opacity: 1;
  }
}

.form-call__input-container_phone {
  & label {
    display: block;
    position: absolute;
    top: 10px;
    left: 28px;
    font-size: 14px;
    line-height: 20px;
    color: #828282;
  }

  & > input {
    padding: 35px 0 15px 28px;
  }

  & > input:focus {
    &::placeholder {
      opacity: 1;
    }
  }
}

.form-call__input-container_file {
  width: 37%;
  border-bottom: 1px solid $dark;
  position: relative;

  &:hover {
    border-bottom: 1px solid $blue;
  }

  & > label {
    @include flex-center;
    cursor: pointer;
    width: 100%;
    height: 100%;
    color: $blue;
    font-size: 15px;
    position: static;
  }

  & > span {
    @include flex-center;
    cursor: pointer;
    width: 100%;
    height: 100%;
    font-size: 15px;
    text-overflow: ellipsis;
  }

  & > span.error {
    color: #be1a1a;
    font-family: 'HeliosC Bold';
    position: absolute;
    font-size: 11px;
    line-height: 15px;
    left: 0;
    bottom: -50px;
  }

  &:has(span.error) {
    border: none;
    border-bottom: 1px solid #be1a1a;
  }

  & > input {
    display: none;
  }
}

.remove-file-button__container {
  @include flex-center;

  width: 20px;
  height: 20px;
  position: absolute;
  top: calc(50% - 10px);
  right: 10px;
  cursor: pointer;
  z-index: 10;

  & > .vue-svg {
    color: #4f4f4f;

    &:hover {
      color: $orange;
    }
  }
}

.form-call__submit-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 38px 34px 38px 27px;
  border: 1px solid #e0e0e0;
}

.form-call__agreement-container {
  position: relative;
  font-size: 13px;
  line-height: 16px;
  padding-left: 42px;

  & > a {
    color: $blue;
  }

  & > input {
    display: none;

    &:checked ~ .checkmark {
      background-color: $orange;
      border: 1px solid $orange;

      &::after {
        display: block;
      }
    }
  }
}

.form-call__submit-button {
  @include primary-button;

  width: 210px;
  height: 64px;

  &:disabled {
    background-color: $gray;
  }
}

.form-call__close-button {
  @include primary-button;

  width: 70px;
  height: 70px;
  position: absolute;
  top: 0;
  right: -70px;

  & .vue-svg {
    transform: scale(0.67);
  }
}

.checkmark {
  position: absolute;
  top: -6px;
  left: 0px;
  height: 24px;
  width: 24px;
  background: $white;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: #e0e0e0;
  }

  &::after {
    content: '';
    position: absolute;
    display: none;
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
}

.error {
  color: #be1a1a;
  font-family: 'HeliosC Bold';
  position: absolute;
  font-size: 11px;
  line-height: 15px;
  left: 28px;
  bottom: -20px;
}

@media (max-width: 1279px) {
  .form-call__container {
    width: 100%;
    margin: 0;
  }

  .form-call__close-button {
    width: 64px;
    height: 64px;
    top: 40px;
    right: 40px;
  }

  .form-call__wrapper {
    width: 100%;
    margin: 128px 0 77px 0;
    padding: 0 40px;
  }

  .form-call__title {
    font-size: 32px;
    line-height: 37px;
    margin-bottom: 53px;
  }
}

@media (max-width: 767px) {
  .form-call__close-button {
    width: 36px;
    height: 36px;
    top: 20px;
    right: 20px;
  }

  .form-call__wrapper {
    margin: 80px 0 42px 0;
    padding: 0 20px;
  }

  .form-call__title {
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 38px;
  }

  .form-call__input-container {
    margin-bottom: 20px;

    & label {
      font-size: 12px;
      line-height: 16px;
      position: absolute;
      left: 11px;
      top: 17px;
    }

    &:has(input:focus) {
      & input {
        padding: 24px 11px 10px 12px;
      }

      & label {
        top: 7px;
        left: 12px;
        font-size: 9px;
        line-height: 12px;
      }
    }
  }

  .form-call__input-container_phone {
    & label {
      top: 7px;
      font-size: 9px;
      line-height: 12px;
    }

    & > input {
      padding: 24px 0 10px 12px;
    }
  }

  .form-call__input {
    padding: 17px 11px;
    font-size: 12px;
    line-height: 16px;

    &_comments {
      min-height: 100px;
    }
  }

  .form-call__double-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0;

    & > .form-call__input-container {
      max-width: 100%;
    }

    & > .form-call__input-container_birthday {
      width: 100%;
      margin: 0 0 5px 0;
    }

    .form-call__input-container_file {
      width: 100%;
      min-height: 53px;

      & > label {
        font-size: 12px;
        line-height: 15px;
        position: static;
      }

      & > span.error {
        font-size: 8px;
        line-height: 10px;
        left: 0;
        bottom: -35px;
      }
    }
  }

  .form-call__submit-box {
    padding: 0;
    border: none;
    flex-direction: column;
    align-items: start;
  }

  .form-call__agreement-container {
    margin-bottom: 38px;
    padding-left: 29px;
    font-size: 11px;
    line-height: 14px;
  }

  .form-call__submit-button {
    font-size: 14px;
    line-height: 16px;
    width: 100%;
    height: 56px;
  }

  .checkmark {
    position: absolute;
    top: -3px;
    left: 0;
    height: 18px;
    width: 18px;
    border-radius: 2px;

    &::after {
      left: 6px;
      top: 4px;
      width: 5px;
      height: 7px;
      border-width: 0 2px 2px 0;
    }
  }

  .error {
    font-size: 8px;
    line-height: 10px;
    left: 11px;
    bottom: -14px;
  }
}
</style>
