from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Workout, Leaderboard
from django.utils import timezone

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Delete all data in dependency order, one by one to avoid unhashable error
        for obj in Activity.objects.all():
            obj.delete()
        for obj in Workout.objects.all():
            obj.delete()
        for obj in Leaderboard.objects.all():
            obj.delete()
        for obj in User.objects.all():
            obj.delete()
        for obj in Team.objects.all():
            obj.delete()

        # Create Teams
        marvel = Team.objects.create(name='Marvel', description='Marvel Superheroes')
        dc = Team.objects.create(name='DC', description='DC Superheroes')

        # Create Users
        users = [
            User.objects.create(name='Spider-Man', email='spiderman@marvel.com', team=marvel, is_superhero=True),
            User.objects.create(name='Iron Man', email='ironman@marvel.com', team=marvel, is_superhero=True),
            User.objects.create(name='Wonder Woman', email='wonderwoman@dc.com', team=dc, is_superhero=True),
            User.objects.create(name='Batman', email='batman@dc.com', team=dc, is_superhero=True),
        ]

        # Create Activities
        Activity.objects.create(user=users[0], activity_type='Web Swinging', duration=60, date=timezone.now().date())
        Activity.objects.create(user=users[1], activity_type='Suit Training', duration=45, date=timezone.now().date())
        Activity.objects.create(user=users[2], activity_type='Lasso Practice', duration=30, date=timezone.now().date())
        Activity.objects.create(user=users[3], activity_type='Martial Arts', duration=50, date=timezone.now().date())

        # Create Workouts
        w1 = Workout.objects.create(name='Super Strength', description='Strength training for superheroes')
        w2 = Workout.objects.create(name='Agility Drills', description='Agility and speed drills')
        w1.suggested_for.set(users)
        w2.suggested_for.set(users)

        # Create Leaderboards
        Leaderboard.objects.create(team=marvel, total_points=200)
        Leaderboard.objects.create(team=dc, total_points=180)

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data.'))
