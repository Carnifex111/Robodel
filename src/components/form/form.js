import "./form.scss";
import arrow from "../../resources/icon/arrow-left.svg";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Link } from "react-router-dom";



const BasicForm = ({ step, setStep }) => {

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const formik = useFormik({
    initialValues: {
      adress: '',
      home: '',
      entrance: '',
      lastName: '',
      firstName: '',
      phone: ''
    },
    validationSchema: Yup.object({
      adress: Yup.string()
        .min(3, "Минимум 3 символа!")
        .required('Введите адрес доставки'),
      home: Yup.string()
        .required('Введите номер дома'),
      lastName: Yup.string()
        .required('Введите имя'),
      firstName: Yup.string()
        .required('Введите фамилию'),
      phone: Yup.string()
        .required('Введите номер телефона')
        .matches(phoneRegExp, 'Некорректный номер телефона'),
      entrance: Yup.number().required('Введите номер подъезда')
    }),
    onSubmit: values => setStep(step = 2)
  })

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <div className="form-container">
        <Link to={'/'} className="step-back">
          <img src={arrow} alt="arrow-left" /> Назад
        </Link>

        <div className="form-container__adress">
          <h2>Куда доставить заказ?</h2>
          <div className="form-container__adress__inputs">
            <input
              className={`input-form ${formik.touched.adress && formik.errors.adress ? 'input-form__invalid' : null}`}
              name="adress"
              placeholder="Адрес доставки"
              type="text"
              value={formik.values.adress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="form-container__adress__inputs__home">
              <input
                className={`input-form ${formik.touched.home && formik.errors.home ? 'input-form__invalid' : null}`}
                name="home"
                placeholder="Дом"
                type="text"
                value={formik.values.home}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <input
                className={`input-form ${formik.touched.entrance && formik.errors.entrance ? 'input-form__invalid' : null}`}
                name={"entrance"}
                placeholder="Подъед"
                type="text"
                value={formik.values.entrance}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.errors.adress && formik.touched.adress ? <div className="validate">{formik.errors.adress}</div> : null}
            {formik.errors.home && formik.touched.home ? <div className="validate">{formik.errors.home}</div> : null}
          </div>
        </div>

        <div className="form-container__contacts">
          <h2>Ваши данные</h2>
          <div className="form-container__contacts__inputs">
            <input
              className={`input-form ${formik.touched.lastName && formik.errors.lastName ? 'input-form__invalid' : null}`}
              name="lastName"
              placeholder="Имя"
              type="text"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.lastName && formik.touched.lastName ? <div className="validate">{formik.errors.lastName}</div> : null}
            <input
              className={`input-form ${formik.touched.firstName && formik.errors.firstName ? 'input-form__invalid' : null}`}
              name="firstName"
              placeholder="Фамилия"
              type="text"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.firstName && formik.touched.firstName ? <div className="validate">{formik.errors.firstName}</div> : null}
            <input
              className={`input-form ${formik.touched.phone && formik.errors.phone ? 'input-form__invalid' : null}`}
              name="phone"
              placeholder="Номер телефона"
              type="tel"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.phone && formik.touched.phone ? <div className="validate">{formik.errors.phone}</div> : null}
          </div>
        </div>
      </div>
      <button className="primary-button">Оформить заказ</button>
    </form>
  );
};

export default BasicForm;
