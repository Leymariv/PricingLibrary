from django.test import TestCase
from backend.product.product import *


class OptionClass(TestCase):
    def setUp(self):
        pass

    def tearDown(self):
        # Clean up run after every test method.
        pass

    def test_something_that_will_pass(self):
        self.assertFalse(False)

    def test_something_that_will_fail(self):
        self.assertTrue(False)
