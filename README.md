# Amesite_Assessment

## Links
Backend: https://elearning-assessment-backend.onrender.com <br>
Frontend: https://elearning-assessment-frontend.onrender.com <br>
Moodle: https://elearning-assessment-moodle.moodlecloud.com <br>

#### PostgreSQL DB Connection
user: 'superuser_amesite'<br>
host: 'dpg-cj6luscl975s73ce112g-a.oregon-postgres.render.com'<br>
database: 'amesite'<br>
password: 'QiTMRopDvbpVmowiLQMdtEqh2yZeWxIb'<br>
port: '5432'<br>

#### Moodle User login
username: admin <br>
password: password

<hr>

### Step-by-Step Guide: Checking the Working of the eLearning Application

**1. Visit the Frontend:**
- Open your web browser and navigate to the URL of the frontend of the eLearning application (`https://elearning-assessment-frontend.onrender.com`).
- You will be directed to the landing page of the application.

**2. Enter Details:**
- Fill in the required details to access the assessment page.

**3. Complete the Quiz:**
- After proceeding, you will be presented with a list of available questions.
- Answer each question to the best of your knowledge and submit the assessment once you've completed all the questions.

**4. Check Marks on Moodle:**
- Open a new browser tab and navigate to your Moodle instance (`https://elearning-assessment-moodle.moodlecloud.com`).
- Log in to Moodle using given credentials.
- Depending on the setup, you might find a "Grades" or "My Grades" section where your assessment score should be displayed. Look for the assessment you just completed and verify that the score is accurately reflected.

**5. Connect to PostgreSQL DB:**
**Using Terminal:**
- Open a terminal window on your computer.
- Use the below command to connect to the PostgreSQL database.

  ```bash
  PGPASSWORD=QiTMRopDvbpVmowiLQMdtEqh2yZeWxIb psql -h dpg-cj6luscl975s73ce112g-a.oregon-postgres.render.com -U superuser_amesite amesite

