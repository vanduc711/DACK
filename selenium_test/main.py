import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service

class MyTestCase(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
        # set a 10 second timeout for all driver commands
        self.driver.implicitly_wait(10)

    def tearDown(self):
        self.driver.quit()


    def test_button_login(self):
        # Navigate to https://uda.edu.vn
        self.driver.get('http://localhost:3000')

        # Step 1 - Enter username = ytq@donga.edu.vn
        userNameElement = self.driver.find_element(By.CLASS_NAME ,'Header_ActionUser__Cf44s')
        userNameElement.click()
        errorMessage = self.driver.find_element(By.CSS_SELECTOR, '.FormLogin > p')
        self.assertEqual(errorMessage.text, 'Chào Mừng bạn!')


        # Trường hợp thử nghiệm 1: Xác minh rằng người dùng có thể tìm kiếm thành công một sản phẩm cụ thể.
        # Bước 1: Điều hướng đến Trang chủ
        # Bước 2: Nhập tên sách muốn tìm
        # Bước 3: Nhấn vào nút Tìm kiếm
        # Bước 4: Hiển thị sách liên quan trong kết quả tìm kiếm

        def test_user_can_NOT_login_with_incorrect_password(self):
            # Navigate to https://uda.edu.vn
            self.driver.get('http://localhost:3000')

            # Step 1 - Enter username = ytq@donga.edu.vn
            userNameElement = self.driver.find_element(By.CLASS_NAME ,'Header_ActionUser__Cf44s')
            userNameElement.click()
            errorMessage = self.driver.find_element(By.CSS_SELECTOR, '.FormLogin > p')
            self.assertEqual(errorMessage.text, 'Chào Mừng bạn!')


if __name__ == '__main__':
    unittest.main()
