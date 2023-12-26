import reflex as rx
import code_challenges.constants as constants
import code_challenges.styles.styles as styles
from code_challenges.pages.index import index
from code_challenges.pages.roadmap import roadmap
from code_challenges.pages.exercises import exercises
from code_challenges.pages.projects import projects

app = rx.App(
    stylesheets=styles.STYLESHEETS,
    style=styles.BASE_STYLE,
    head_components=[
        rx.script(
            src=f"https://www.googletagmanager.com/gtag/js?id={constants.GOOGLE_ANALYTICS_TAG}"
        ),
        rx.script(
            f"""
window.dataLayer = window.dataLayer || [];
function gtag(){{dataLayer.push(arguments);}}
gtag('js', new Date());
gtag('config', '{constants.GOOGLE_ANALYTICS_TAG}');
"""
        ),
    ],
)

app.add_page(index)
# app.add_page(roadmap)
# app.add_page(exercises)
# app.add_page(projects)

app.compile()
