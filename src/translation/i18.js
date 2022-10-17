export const MyTranslate = (lang = 'vi') => {
	return {
		resources: {
			en: {
				translation: {
					header: {
						Home: 'Home',
						About: 'About',
						Services: 'Services',
						Resume: 'Resume',
						Work: 'Work',
						Contact: 'Contact',
					},
					home: {
						start: 'START',
					},
					about: {
						name: 'Name',
						Age: 'Age',
						Experience: 'Experience',
						Country: 'Country',
						Location: 'Location',
						Mail: 'E-Mail',
						Phone: 'Phone',
						dowload: 'DOWNLOAD',
						contact: 'CONTACT ME',
					},
					service: {
						ExperienceProject: 'EXPERIENCE PROJECT',
					},
					resume: {
						education: 'EDUCATION',
						experience: 'EXPERIENCE',
					},
					work: {
						OutstandingProject: 'OUTSTANDING PROJECT',
					},
					contact: {
						contactMail: 'CONTACT MAIL',
						contactAddress: 'CONTACT ADDRESS',
					},
				},
			},
			vi: {
				translation: {
					header: {
						Home: 'Trang chủ',
						About: 'Thông tin',
						Services: 'Dịch vụ',
						Resume: 'Lý lịch',
						Work: 'Công việc',
						Contact: 'Liên hệ',
					},
					home: {
						start: 'BẮT ĐẦU',
					},
					about: {
						name: 'Tên',
						Age: 'Tuổi',
						Experience: 'Kinh nghiệm',
						Country: 'Thành phố',
						Location: 'Địa chỉ',
						Mail: 'E-Mail',
						Phone: 'Số điện thoại',
						dowload: 'TẢI TẬP TIN',
						contact: 'LIÊN HỆ TÔI',
					},
					service: {
						ExperienceProject: 'DỰ ÁN THỰC THI',
					},
					resume: {
						education: 'HỌC VẤN',
						experience: 'KINH NGHIỆM',
					},
					work: {
						OutstandingProject: 'DỰ ÁN NỔI BẬT',
					},
					contact: {
						contactMail: 'MAIL LIÊN HỆ',
						contactAddress: 'ĐỊA CHỈ LIÊN HỆ',
					},
				},
			},
		},
		lng: lang,
		fallbackLng: lang,

		interpolation: {
			escapeValue: false,
		},
	}
}
